export interface ICategoryFormInput{
	name: string
	icon: string
}

export interface ICategoryUpdateInput {
	id: number,
	data: ICategoryFormInput
}