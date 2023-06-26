interface ProductProps {
	id: number
	mainImageSrc: string
	secondImageSrc: string
	imageCount: number
	name: string
	price: number
	categories: string[]
	tags: string[]
	colors: string[]
	sizes: string[]
}

function createProduct({id, mainImageSrc, secondImageSrc, imageCount, name, price, categories, tags, colors, sizes}: ProductProps) {
	return {
		id, mainImageSrc, secondImageSrc, imageCount, name, price, categories, tags, colors, sizes
	}
}

const categories = {
	man: "Man",
	woman: "Woman",
	kids: "Kids",
	shoes:"Shoes",
	pants: "Pants",
	shorts: "Shorts",
	tShirts: "T-Shirts",
	shirt: "Shirt",
	jackets: "Jackets",
	coat: "Coat",
	accessories: "Accessories",
}

const tags = {
	shirt: "shirt",
	shoes: "shoes"
}

const sizes = {
	extraSmall: "XS",
	small: "S",
	medium: "M",
	large: "L",
	extraLarge: "XL"
}

const shoeSize = {
	9: "9",
	9.5: "9.5",
	10: "10",
	10.5: "10.5",
	11: "11",
}

const imagePath = "/images/";

export const products: ProductProps[] = [
	{
		id: 1,
		mainImageSrc: imagePath + "product-1.jpg",
		secondImageSrc: imagePath + "product-1-2.jpg",
		imageCount: 4,
		name: "Black shirt with white border",
		price: 35.00,
		categories: [categories.man],
		tags: [tags.shirt],
		colors: [],
		sizes: [sizes.medium, sizes.large]
	},
	{
		id: 2,
		mainImageSrc: imagePath + "product-1.jpg",
		secondImageSrc: imagePath + "product-1-2.jpg",
		imageCount: 4,
		name: "Black Shoes Fashionable",
		price: 22.00,
		categories: [categories.man, categories.shoes],
		tags: [tags.shoes],
		colors: [],
		sizes: [sizes.medium, sizes.large]
	},
	{
		id: 3,
		mainImageSrc: imagePath + "product-1.jpg",
		secondImageSrc: imagePath + "product-1-2.jpg",
		imageCount: 4,
		name: "Boy’s Jeans Simple",
		price: 35.00,
		categories: [categories.kids, categories.pants],
		tags: [],
		colors: [],
		sizes: [sizes.extraSmall, sizes.small]
	},
	{
		id: 4,
		mainImageSrc: imagePath + "product-1.jpg",
		secondImageSrc: imagePath + "product-1-2.jpg",
		imageCount: 4,
		name: "Brown and White Striped T-shirt",
		price: 50.00,
		categories: [categories.man, categories.tShirts],
		tags: [],
		colors: [],
		sizes: [sizes.medium, sizes.large]
	},
	{
		id: 5,
		mainImageSrc: imagePath + "product-1.jpg",
		secondImageSrc: imagePath + "product-1-2.jpg",
		imageCount: 4,
		name: "Brown Cowboy Boots",
		price: 50.00,
		categories: [categories.man, categories.shoes],
		tags: [],
		colors: [],
		sizes: [shoeSize["9.5"], shoeSize[10], shoeSize["10.5"], shoeSize[11]]
	},
	{
		id: 6,
		mainImageSrc: imagePath + "product-1.jpg",
		secondImageSrc: imagePath + "product-1-2.jpg",
		imageCount: 4,
		name: "Cotton T-shirt",
		price: 19.00,
		categories: [categories.woman, categories.tShirts],
		tags: [],
		colors: [],
		sizes: [sizes.small, sizes.medium, sizes.large, sizes.extraLarge]
	},
	{
		id: 7,
		mainImageSrc: imagePath + "product-1.jpg",
		secondImageSrc: imagePath + "product-1-2.jpg",
		imageCount: 4,
		name: "Denim shirt",
		price: 32.00,
		categories: [categories.man, categories.tShirts],
		tags: [],
		colors: [],
		sizes: [sizes.medium, sizes.large, sizes.extraLarge]
	},
	{
		id: 8,
		mainImageSrc: imagePath + "product-1.jpg",
		secondImageSrc: imagePath + "product-1-2.jpg",
		imageCount: 4,
		name: "Funnel collar puffer jacket",
		price: 89.00,
		categories: [categories.woman, categories.jackets],
		tags: [],
		colors: ["Gray", "Pink"],
		sizes: [sizes.extraSmall, sizes.small, sizes.medium, sizes.large, sizes.extraLarge]
	},
	{
		id: 9,
		mainImageSrc: imagePath + "product-1.jpg",
		secondImageSrc: imagePath + "product-1-2.jpg",
		imageCount: 4,
		name: "Girl’s Plaid shirt",
		price: 25.00,
		categories: [categories.woman, categories.shirt],
		tags: [],
		colors: [],
		sizes: [sizes.extraSmall, sizes.small, sizes.medium, sizes.large]
	},
	{
		id: 10,
		mainImageSrc: imagePath + "product-1.jpg",
		secondImageSrc: imagePath + "product-1-2.jpg",
		imageCount: 4,
		name: "Girls’ gathered-sleeve top",
		price: 18.00,
		categories: [categories.woman, categories.tShirts],
		tags: [],
		colors: [],
		sizes: [sizes.small, sizes.medium, sizes.large]
	},
	{
		id: 11,
		mainImageSrc: imagePath + "product-1.jpg",
		secondImageSrc: imagePath + "product-1-2.jpg",
		imageCount: 4,
		name: "Girls’ mixed-stripe shirt",
		price: 16.00,
		categories: [categories.woman, categories.shirt],
		tags: [],
		colors: [],
		sizes: [sizes.small, sizes.medium, sizes.large]
	},
	{
		id: 12,
		mainImageSrc: imagePath + "product-1.jpg",
		secondImageSrc: imagePath + "product-1-2.jpg",
		imageCount: 4,
		name: "Girls’ slide sneakers",
		price: 22.00,
		categories: [categories.woman, categories.kids, categories.shoes],
		tags: [],
		colors: [],
		sizes: [shoeSize[9], shoeSize["9.5"], shoeSize[10], shoeSize["10.5"], shoeSize[11]]
	},
	{
		id: 13,
		mainImageSrc: imagePath + "product-1.jpg",
		secondImageSrc: imagePath + "product-1-2.jpg",
		imageCount: 4,
		name: "Girls’ slide sneakers in emojis",
		price: 27.00,
		categories: [categories.woman, categories.shoes],
		tags: [],
		colors: [],
		sizes: [shoeSize[9], shoeSize["9.5"], shoeSize[10], shoeSize["10.5"], shoeSize[11]]
	},
	{
		id: 14,
		mainImageSrc: imagePath + "product-1.jpg",
		secondImageSrc: imagePath + "product-1-2.jpg",
		imageCount: 4,
		name: "Girls’ star-print jeans",
		price: 15.00,
		categories: [categories.kids, categories.pants],
		tags: [],
		colors: [],
		sizes: [sizes.small, sizes.medium, sizes.large]
	},
	{
		id: 15,
		mainImageSrc: imagePath + "product-1.jpg",
		secondImageSrc: imagePath + "product-1-2.jpg",
		imageCount: 4,
		name: "Gray jacket",
		price: 67.00,
		categories: [categories.man, categories.coat],
		tags: [],
		colors: [],
		sizes: [sizes.small, sizes.medium, sizes.large, sizes.extraLarge]
	},
	{
		id: 16,
		mainImageSrc: imagePath + "product-1.jpg",
		secondImageSrc: imagePath + "product-1-2.jpg",
		imageCount: 4,
		name: "Green shirt",
		price: 22.00,
		categories: [categories.woman, categories.shirt],
		tags: [],
		colors: [],
		sizes: [sizes.small, sizes.medium, sizes.large, sizes.extraLarge]
	},
	{
		id: 17,
		mainImageSrc: imagePath + "product-1.jpg",
		secondImageSrc: imagePath + "product-1-2.jpg",
		imageCount: 4,
		name: "Green striped jackets",
		price: 42.00,
		categories: [categories.kids, categories.jackets],
		tags: [],
		colors: [],
		sizes: [sizes.small, sizes.medium, sizes.large, sizes.extraLarge]
	},
	{
		id: 18,
		mainImageSrc: imagePath + "product-1.jpg",
		secondImageSrc: imagePath + "product-1-2.jpg",
		imageCount: 4,
		name: "Gril’s Fashion coats",
		price: 65.00,
		categories: [categories.kids, categories.coat],
		tags: [],
		colors: [],
		sizes: [sizes.small, sizes.medium, sizes.large, sizes.extraLarge]
	},
	{
		id: 19,
		mainImageSrc: imagePath + "product-1.jpg",
		secondImageSrc: imagePath + "product-1-2.jpg",
		imageCount: 4,
		name: "Gril’s Short T-shirt",
		price: 39.00,
		categories: [categories.kids, categories.tShirts],
		tags: [],
		colors: [],
		sizes: [sizes.small, sizes.medium, sizes.large, sizes.extraLarge]
	},
	{
		id: 20,
		mainImageSrc: imagePath + "product-1.jpg",
		secondImageSrc: imagePath + "product-1-2.jpg",
		imageCount: 4,
		name: "Guide Pack Cap",
		price: 20.00,
		categories: [categories.man, categories.accessories],
		tags: [],
		colors: [],
		sizes: [sizes.small, sizes.medium, sizes.large, sizes.extraLarge]
	},
	{
		id: 21,
		mainImageSrc: imagePath + "product-1.jpg",
		secondImageSrc: imagePath + "product-1-2.jpg",
		imageCount: 4,
		name: "High sport shoes",
		price: 35.00,
		categories: [categories.man, categories.shoes],
		tags: [],
		colors: [],
		sizes: [shoeSize[9], shoeSize["9.5"], shoeSize[10], shoeSize["10.5"], shoeSize[11]]
	},
	{
		id: 22,
		mainImageSrc: imagePath + "product-1.jpg",
		secondImageSrc: imagePath + "product-1-2.jpg",
		imageCount: 4,
		name: "Horizontal Striped T-shirt",
		price: 30.00,
		categories: [categories.woman, categories.shirt],
		tags: [],
		colors: [],
		sizes: [sizes.small, sizes.medium, sizes.large, sizes.extraLarge]
	},
	{
		id: 23,
		mainImageSrc: imagePath + "product-1.jpg",
		secondImageSrc: imagePath + "product-1-2.jpg",
		imageCount: 4,
		name: "Jacket Collar",
		price: 45.00,
		categories: [categories.woman, categories.jackets],
		tags: [],
		colors: ["Gray", "Pink", "Red"],
		sizes: [sizes.small, sizes.medium, sizes.large, sizes.extraLarge]
	},
	{
		id: 24,
		mainImageSrc: imagePath + "product-1.jpg",
		secondImageSrc: imagePath + "product-1-2.jpg",
		imageCount: 4,
		name: "Kid bag",
		price: 30.00,
		categories: [categories.kids, categories.accessories],
		tags: [],
		colors: ["Gray", "Pink", "Red"],
		sizes: []
	},
	{
		id: 25,
		mainImageSrc: imagePath + "product-1.jpg",
		secondImageSrc: imagePath + "product-1-2.jpg",
		imageCount: 4,
		name: "Leather Belts",
		price: 35.00,
		categories: [categories.man, categories.accessories],
		tags: [],
		colors: [],
		sizes: []
	},
	{
		id: 26,
		mainImageSrc: imagePath + "product-1.jpg",
		secondImageSrc: imagePath + "product-1-2.jpg",
		imageCount: 4,
		name: "Leather strap watches",
		price: 45.00,
		categories: [categories.man, categories.accessories],
		tags: [],
		colors: [],
		sizes: []
	},
	{
		id: 27,
		mainImageSrc: imagePath + "product-1.jpg",
		secondImageSrc: imagePath + "product-1-2.jpg",
		imageCount: 4,
		name: "Light Felt Coat",
		price: 25.00,
		categories: [categories.woman, categories.jackets],
		tags: [],
		colors: [],
		sizes: [sizes.small, sizes.medium, sizes.large, sizes.extraLarge]
	},
	{
		id: 28,
		mainImageSrc: imagePath + "product-1.jpg",
		secondImageSrc: imagePath + "product-1-2.jpg",
		imageCount: 4,
		name: "Long sleeves",
		price: 25.00,
		categories: [categories.woman, categories.jackets],
		tags: [],
		colors: ["Blue", "Green"],
		sizes: [sizes.small, sizes.medium, sizes.large, sizes.extraLarge]
	},
	{
		id: 29,
		mainImageSrc: imagePath + "product-1.jpg",
		secondImageSrc: imagePath + "product-1-2.jpg",
		imageCount: 4,
		name: "Luxury bag",
		price: 25.00,
		categories: [categories.woman, categories.accessories],
		tags: [],
		colors: [],
		sizes: []
	},
	{
		id: 30,
		mainImageSrc: imagePath + "product-1.jpg",
		secondImageSrc: imagePath + "product-1-2.jpg",
		imageCount: 4,
		name: "Luxury Fur Coat",
		price: 69.00,
		categories: [categories.woman, categories.coat],
		tags: [],
		colors: [],
		sizes: [sizes.small, sizes.medium, sizes.large, sizes.extraLarge]
	},
	{
		id: 31,
		mainImageSrc: imagePath + "product-1.jpg",
		secondImageSrc: imagePath + "product-1-2.jpg",
		imageCount: 4,
		name: "Men’s Bermuda Shorts",
		price: 35.00,
		categories: [categories.man, categories.shorts],
		tags: [],
		colors: [],
		sizes: [sizes.small, sizes.medium, sizes.large, sizes.extraLarge]
	},
	{
		id: 32,
		mainImageSrc: imagePath + "product-1.jpg",
		secondImageSrc: imagePath + "product-1-2.jpg",
		imageCount: 4,
		name: "Men’s office t-shirts",
		price: 57.00,
		categories: [categories.man, categories.tShirts],
		tags: [],
		colors: ["Black", "Gray", "Red"],
		sizes: [sizes.small, sizes.medium, sizes.large, sizes.extraLarge]
	},
	{
		id: 33,
		mainImageSrc: imagePath + "product-1.jpg",
		secondImageSrc: imagePath + "product-1-2.jpg",
		imageCount: 4,
		name: "Over-Sized Pants",
		price: 22.00,
		categories: [categories.woman, categories.pants],
		tags: [],
		colors: [],
		sizes: [sizes.small, sizes.medium, sizes.large, sizes.extraLarge]
	},
	{
		id: 34,
		mainImageSrc: imagePath + "product-1.jpg",
		secondImageSrc: imagePath + "product-1-2.jpg",
		imageCount: 4,
		name: "Pink Cap",
		price: 15.00,
		categories: [categories.woman, categories.accessories],
		tags: [],
		colors: [],
		sizes: []
	},
	{
		id: 35,
		mainImageSrc: imagePath + "product-1.jpg",
		secondImageSrc: imagePath + "product-1-2.jpg",
		imageCount: 4,
		name: "Pink Shoes Fashionable",
		price: 32.00,
		categories: [categories.woman, categories.shoes],
		tags: [],
		colors: [],
		sizes: [shoeSize[9], shoeSize["9.5"], shoeSize[10], shoeSize["10.5"], shoeSize[11]]
	},
	{
		id: 36,
		mainImageSrc: imagePath + "product-1.jpg",
		secondImageSrc: imagePath + "product-1-2.jpg",
		imageCount: 4,
		name: "Premium backpack",
		price: 43.00,
		categories: [categories.man, categories.accessories],
		tags: [],
		colors: [],
		sizes: []
	},
	{
		id: 37,
		mainImageSrc: imagePath + "product-1.jpg",
		secondImageSrc: imagePath + "product-1-2.jpg",
		imageCount: 4,
		name: "Puffy Jacket",
		price: 25.00,
		categories: [categories.woman, categories.jackets],
		tags: [],
		colors: [],
		sizes: [sizes.small, sizes.medium, sizes.large, sizes.extraLarge]
	},
	{
		id: 38,
		mainImageSrc: imagePath + "product-1.jpg",
		secondImageSrc: imagePath + "product-1-2.jpg",
		imageCount: 4,
		name: "Red Cap",
		price: 22.00,
		categories: [categories.man, categories.accessories],
		tags: [],
		colors: [],
		sizes: []
	},
	{
		id: 39,
		mainImageSrc: imagePath + "product-1.jpg",
		secondImageSrc: imagePath + "product-1-2.jpg",
		imageCount: 4,
		name: "Roll Top Backpack",
		price: 25.00,
		categories: [categories.man, categories.accessories],
		tags: [],
		colors: [],
		sizes: []
	},
	{
		id: 40,
		mainImageSrc: imagePath + "product-1.jpg",
		secondImageSrc: imagePath + "product-1-2.jpg",
		imageCount: 4,
		name: "Scratched jeans",
		price: 20.00,
		categories: [categories.woman, categories.pants],
		tags: [],
		colors: [],
		sizes: [sizes.small, sizes.medium, sizes.large, sizes.extraLarge]
	},
	{
		id: 41,
		mainImageSrc: imagePath + "product-1.jpg",
		secondImageSrc: imagePath + "product-1-2.jpg",
		imageCount: 4,
		name: "Set: T-shirt and jeans",
		price: 65.00,
		categories: [categories.woman, categories.tShirts, categories.pants],
		tags: [],
		colors: [],
		sizes: [sizes.small, sizes.medium, sizes.large, sizes.extraLarge]
	},
	{
		id: 42,
		mainImageSrc: imagePath + "product-1.jpg",
		secondImageSrc: imagePath + "product-1-2.jpg",
		imageCount: 4,
		name: "Short jeans",
		price: 32.00,
		categories: [categories.woman, categories.shorts],
		tags: [],
		colors: [],
		sizes: [sizes.small, sizes.medium, sizes.large, sizes.extraLarge]
	},
	{
		id: 43,
		mainImageSrc: imagePath + "product-1.jpg",
		secondImageSrc: imagePath + "product-1-2.jpg",
		imageCount: 4,
		name: "Simple White Shoes",
		price: 80.00,
		categories: [categories.man, categories.shoes],
		tags: [],
		colors: [],
		sizes: [shoeSize[9], shoeSize["9.5"], shoeSize[10], shoeSize["10.5"], shoeSize[11]]
	},
	{
		id: 44,
		mainImageSrc: imagePath + "product-1.jpg",
		secondImageSrc: imagePath + "product-1-2.jpg",
		imageCount: 4,
		name: "Slip Sneakers",
		price: 32.00,
		categories: [categories.man, categories.shoes],
		tags: [],
		colors: [],
		sizes: [shoeSize[9], shoeSize["9.5"], shoeSize[10], shoeSize["10.5"], shoeSize[11]]
	},
	{
		id: 45,
		mainImageSrc: imagePath + "product-1.jpg",
		secondImageSrc: imagePath + "product-1-2.jpg",
		imageCount: 4,
		name: "Small Fashion Bag",
		price: 99.00,
		categories: [categories.woman, categories.accessories],
		tags: [],
		colors: [],
		sizes: []
	},
	{
		id: 46,
		mainImageSrc: imagePath + "product-1.jpg",
		secondImageSrc: imagePath + "product-1-2.jpg",
		imageCount: 4,
		name: "Stylish Floral Shirt",
		price: 25.00,
		categories: [categories.woman, categories.shirt],
		tags: [],
		colors: [],
		sizes: [sizes.small, sizes.medium, sizes.large, sizes.extraLarge]
	},
	{
		id: 47,
		mainImageSrc: imagePath + "product-1.jpg",
		secondImageSrc: imagePath + "product-1-2.jpg",
		imageCount: 4,
		name: "Suede Sneaker",
		price: 20.00,
		categories: [categories.man, categories.shoes],
		tags: [],
		colors: [],
		sizes: [shoeSize[9], shoeSize["9.5"], shoeSize[10], shoeSize["10.5"], shoeSize[11]]
	},
	{
		id: 48,
		mainImageSrc: imagePath + "product-1.jpg",
		secondImageSrc: imagePath + "product-1-2.jpg",
		imageCount: 4,
		name: "Thin Coat Lightly",
		price: 89.00,
		categories: [categories.woman, categories.coat],
		tags: [],
		colors: ["Pink", "Gray"],
		sizes: [sizes.small, sizes.medium, sizes.large, sizes.extraLarge]
	},
	{
		id: 49,
		mainImageSrc: imagePath + "product-1.jpg",
		secondImageSrc: imagePath + "product-1-2.jpg",
		imageCount: 4,
		name: "Torso Mittens",
		price: 99.00,
		categories: [categories.woman, categories.accessories],
		tags: [],
		colors: ["Pink", "Gray"],
		sizes: []
	},
	{
		id: 50,
		mainImageSrc: imagePath + "product-1.jpg",
		secondImageSrc: imagePath + "product-1-2.jpg",
		imageCount: 4,
		name: "White Bag",
		price: 15.00,
		categories: [categories.woman, categories.accessories],
		tags: [],
		colors: [],
		sizes: []
	},
	{
		id: 51,
		mainImageSrc: imagePath + "product-1.jpg",
		secondImageSrc: imagePath + "product-1-2.jpg",
		imageCount: 4,
		name: "Wide T-shirt",
		price: 75.00,
		categories: [categories.woman, categories.tShirts],
		tags: [],
		colors: [],
		sizes: [sizes.small, sizes.medium, sizes.large, sizes.extraLarge]
	},
	{
		id: 52,
		mainImageSrc: imagePath + "product-1.jpg",
		secondImageSrc: imagePath + "product-1-2.jpg",
		imageCount: 4,
		name: "Winter Coat with Hat",
		price: 62.00,
		categories: [categories.man, categories.coat],
		tags: [],
		colors: [],
		sizes: [sizes.small, sizes.medium, sizes.large, sizes.extraLarge]
	},
	
]

export const featuredWomanProductIds = {
	all: [48, 45, 8, 35, 23, 42],
	shirt: [6, 46, 9, 11, 10, 51],
	sweatshirt: [30, 41],
	jeans: [42, 40, 28]
}

export const featuredManProductIds = {
	all: [52, 25, 32, 31, 15, 38],
	shoes: [21, 43, 2, 44, 47, 5],
	tShirts: [52, 32, 4, 7],
}