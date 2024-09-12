import { useState } from 'react';
import ActionButton from './Button/ActionButton';
import { Alert, Box, CircularProgress } from '@mui/material';
import { Fade } from '@mui/material';


const ResumeDownload = () => {
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState<string | null>(null);
    const [downloaded, setDownloaded] = useState<boolean>(false);

    const downloadResume = async () => {
        setLoading(true);
        setError(null);

        try {
            const response = await fetch('/resume.pdf', {
                method: 'GET',
                headers: {
                    'Content-Type': 'application/pdf',
                },
            });

            if (!response.ok) {
                throw new Error(`Failed to fetch the file: ${response.statusText}`);
            }

            const blob = await response.blob();

            if (blob.size === 0) {
                throw new Error('The fetched PDF is empty.');
            }

            const url = window.URL.createObjectURL(blob);
            const link = document.createElement('a');
            link.href = url;
            link.setAttribute('download', 'Niyousha_Raeesinejad_Resume.pdf');
            document.body.appendChild(link);
            link.click();
            link.remove();

            window.URL.revokeObjectURL(url);
        } catch (err: any) {
            setError(err.message || 'An error occurred during the download.');
        } finally {
            setLoading(false);
            setDownloaded(true);
            setTimeout(() => {
                setDownloaded(false)
            }, 3000
            );
        }
    };

    return (
        <div>
            <ActionButton
                onClick={downloadResume}
                text='Download CV'
            />
            {error && <Alert sx={{ marginTop: '5px', justifyContent: 'center' }} severity="error">
                {error}
            </Alert>}
            {loading && <Box sx={{ display: 'flex', marginTop: '5px', justifyContent: 'center' }}>
                <CircularProgress size={24} sx={{ color: '#8d8079' }} />
            </Box>}
            <Fade in={downloaded} timeout={1000} >
                <Alert sx={{ marginTop: '5px', justifyContent: 'center' }} severity="success">
                    Successfully downloaded!
                </Alert>
            </Fade>
        </div>
    );
};

export default ResumeDownload;