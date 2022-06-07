export interface ArticleTeaserProps {
  title: string,
  rating: number,
  img: string,
  url: string,
  tags:
    {
      name: string,
      value: string | number,
    }[],
  price: {
    regular: number,
    sale: number
  }
}
