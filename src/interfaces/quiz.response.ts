type List = {
    name: string;
    url: string;
}

type CorrectAnswer = {
    image: string;
    name: string;
}

export interface QuizResponse {
    fourPokemon: Array<List>
    correctAnswer: CorrectAnswer
}