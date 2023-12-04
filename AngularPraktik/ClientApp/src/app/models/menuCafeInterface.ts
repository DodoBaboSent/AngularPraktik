export interface IMenuCafe{
  id: number
  name: string
  vegan: boolean
  price: number
  category: {
    section: string
    childrenMenu: boolean }
  image: string
}
