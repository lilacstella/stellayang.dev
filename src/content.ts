import type * as T from './content-types';

// All content found in the top profile card
export const TITLE: T.Title                 = 'Stella Yang';
export const DESCRIPTION: T.Description     = 'Texas A&M Computer Science, exploring resilient and secure software';
export const LOCATION: T.Location           = 'Seattle, WA / College Station, TX';
export const GENDER: T.Gender               = 'she/her';

// Profile image is of size 128px x 128px
export const PROFILE_IMAGE: T.ProfileImage  = 'profile.jpeg';

// Can be either a filename or color code. Height is 320px.
// Example: banner.jpg or #1D31DB
export const BANNER: T.Banner               = 'banner.jpeg';

// Can be either 'light' or 'dark'
export const THEME: T.Theme                 = 'light';


/* ==============
   ADD LINKS HERE
   ==============
Links are split into sections, with a header title attached to them.
Format:
{
    sectionTitle: string;
    links: [
        { 
            title: string,
            description: string,
            url: string,
            icon?: string
        }
    ]
}

For custom icons, add the icon image to the folder /public/icons and add the file name to the array.
(Icons are of size 48px x 48px)
If no custom icon is specified, the website favicon will be used instead.

*/
export const LINKS: T.Links[] = [
    {
        sectionTitle: 'Find me @',
        links: [
            {
                title: 'LinkedIn',
                description: 'Let\'s connect!',
                url: 'https://www.linkedin.com/in/lilacstella/',
                icon: 'LI-In-Bug.png'
            },
            {
                title: 'GitHub',
                description: 'See my project work and contributions',
                url: 'https://github.com/lilacstella',
                icon: 'github-mark.svg'
            },
            {
                title: 'Resume',
                description: 'Check out my resume',
                url: 'Stella Yang Resume.pdf',
                icon: 'resume.png'
            },
            {
                title: 'Email',
                description: 'Shoot me an email at hey@stellayang.dev',
                url: 'mailto:hey@stellayang.dev?subject=Hey!"',
                icon: 'email.svg'
            },
        ]
    },
]
