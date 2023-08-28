export type GameType = {
    id: number,
    title: string,
    thumbnail: string,
    short_description: string,
    game_url: string,
    genre: string,
    platform: string,
    publisher: string,
    developer: string,
    release_date: string,
    freetogame_profile_url: string
}

export type MinSystemRequirements = {
    os: string,
    processor: string,
    memory: string,
    graphics: string,
    storage: string
}

export type Screenshots = {
    id: number,
    image: string,
}

export type GameTypeById = {
    id: number,
    title: string,
    thumbnail: string,
    status: string,
    short_description: string,
    description: string,
    game_url: string,
    genre: string,
    platform: string,
    publisher: string,
    developer: string,
    release_date: string,
    freetogame_profile_url: string,
    minimum_system_requirements?: MinSystemRequirements,
    screenshots: Screenshots[]
}

export type GameSortParams = {
    platform?: string,
    category?: string,
    "sort-by"?: string
}

export type GameSortByTagParams = {
    platform?: string,
    tag?: string,
    "sort-by"?: string
}