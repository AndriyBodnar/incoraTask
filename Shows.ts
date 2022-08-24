import { randomNumber } from "./index";

export class Show {
  constructor(
    public name: string,
    public genre: string = `drama`,
    public releaseDate: string = `1-1-2005`
  ) {}

  getDuration(): string {
    return `${randomNumber(30, 200)} min`;
  }
}

export class Movie extends Show {
  constructor(
    public name: string,
    public genre: string,
    public releaseDate: string
  ) {
    super(name, genre, releaseDate);
  }
}

export class Episode extends Show {
  constructor(
    public name: string,
    public genre: string,
    public releaseDate: string
  ) {
    super(name, genre, releaseDate);
  }
}

export class Series extends Show {
  constructor(
    public name: string,
    public genre: string,
    public releaseDate: string,
    public episodes?: number
  ) {
    super(name, genre, releaseDate);
  }
}
