import {GameTypeById} from "../../../api/types/gameType";

export function initialValueGame(): GameTypeById {
    return {
        description: '',
        developer: '',
        freetogame_profile_url: '',
        game_url: '',
        genre: '',
        id: 0,
        minimum_system_requirements: {
            os: '',
            processor: '',
            memory: '',
            storage: '',
            graphics: ''
        },
        platform: '',
        publisher: '',
        release_date: '',
        screenshots: [],
        short_description: '',
        status: '',
        thumbnail: '',
        title: ''
    }
}