export type Title           = string;
export type Description     = string;
export type Location        = string;
export type Gender          = string;

export type ProfileImage    = string;
export type Banner          = string;

export type Theme           = 'light' | 'dark';

// Individual link object
export type Link = {
    title: string;
    description: string;
    url: string;
    icon?: string;
}

// Section of links, including section title
export type Links = {
    sectionTitle: string;
    links: Link[];
}
