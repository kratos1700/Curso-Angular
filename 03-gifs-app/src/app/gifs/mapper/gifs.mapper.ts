import { Gifs } from "../interfaces/gif.interface.resp";
import { Gif } from "../interfaces/gifs.interface";

export class GifMapper{
static mapGiphyItemToGif(item: Gif): Gifs {
  return {
    id: item.id,
    title: item.title,
    url: item.images.original.url
  };
}


static mapGiphyItemsToGifArray(items: Gif[]): Gifs[] {
  return items.map(this.mapGiphyItemToGif);

  }
}
