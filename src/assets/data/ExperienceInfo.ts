import OilBarrelIcon from '@mui/icons-material/OilBarrel';
import DvrIcon from '@mui/icons-material/Dvr';
import SchoolIcon from '@mui/icons-material/School';
import CorporateFareIcon from '@mui/icons-material/CorporateFare';
import LibraryBooksIcon from '@mui/icons-material/LibraryBooks';
import { SxProps } from '@mui/material';

type ExperienceIconType = {
    component?: any,
    overrideIconStyle: SxProps,
}

export type ExperienceType = {
    title: string,
    date: string,
    location: string,
    content: string[],
    icon: ExperienceIconType
}

export const RESUME_OVERLEAF_LINK = 'https://www.overleaf.com/project/611d97a9cb306e33a0cfdc26/output/output.pdf?dl=1&ver=2'

const experienceFillers: ExperienceType[] = [
    {
        title: '',
        date: '',
        location: '',
        content: [
            ''
        ],
        icon: {
            overrideIconStyle: { width: '14px', height: '14px', bgcolor: '#b8b6b0' },
        }
    },
    {
        title: '',
        date: '',
        location: '',
        content: [
            ''
        ],
        icon: {
            overrideIconStyle: { width: '10px', height: '10px', bgcolor: '#b8b6b0' },
        }
    },
    {
        title: '',
        date: '',
        location: '',
        content: [
            ''
        ],
        icon: {
            overrideIconStyle: { width: '6px', height: '6px', bgcolor: '#b8b6b0' },
        }
    }
]

export const experience: ExperienceType[] = [
    {
        title: 'Software Developer',
        date: 'May 2023 - Present',
        location: 'Pason Systems',
        content: [
            ''
        ],
        icon: {
            component: OilBarrelIcon,
            overrideIconStyle: { bgcolor: '#866D6B' },
        }
    },
    {
        title: 'President',
        date: 'May 2022 - May 2024',
        location: 'Tech Start UCalgary',
        content: [
            ''
        ],
        icon: {
            component: CorporateFareIcon,
            overrideIconStyle: { bgcolor: '#866D6B' },
        }
    },
    {
        title: 'Software Developer Intern',
        date: 'May 2021 - August 2023',
        location: 'Pason Systems',
        content: [
            ''
        ],
        icon: {
            component: OilBarrelIcon,
            overrideIconStyle: { bgcolor: '#866D6B' },
        }
    },
    {
        title: 'Website Team Lead',
        date: 'September 2021 - May 2022',
        location: 'Tech Start UCalgary',
        content: [
            ''
        ],
        icon: {
            component: DvrIcon,
            overrideIconStyle: { bgcolor: '#866D6B' },
        }
    },
    {
        title: 'Research Associate',
        date: 'May 2020 - August 2023',
        location: 'University of Calgary',
        content: [
            ''
        ],
        icon: {
            component: LibraryBooksIcon,
            overrideIconStyle: { bgcolor: '#866D6B' },
        }
    },
    {
        title: 'Learning Assistant',
        date: 'September 2019 - May 2023',
        location: 'University of Calgary',
        content: [
            ''
        ],
        icon: {
            component: SchoolIcon,
            overrideIconStyle: { bgcolor: '#866D6B' },
        }
    },
    ...experienceFillers
]