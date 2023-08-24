import {API_PATH} from "./consts";
import {GameType} from "./types/gameType";

function api<T>(url: string, headers?: HeadersInit): Promise<T> {
    return fetch(
        url,
        {
            headers: {
                ...headers,
                'X-RapidAPI-Key': '1391600961mshb1f7c75708dec13p101a01jsna697a9c057e2',
                'X-RapidAPI-Host': 'free-to-play-games-database.p.rapidapi.com'
            }
        }
    )
        .then(response => {
            if (!response.ok) {
                throw new Error('Failed to fetch').message;
            }
            return response.json() as Promise<T>
        })
}
export function getGames() {
    return api<GameType[]>(
        API_PATH,
        { method: 'GET' }
    );
}
//
// export function getGameByID(id: string) {
//     return api<GameType[]>(
//         `${API_PATH}/${id}`,
//         { method: 'GET' }
//     );
// }