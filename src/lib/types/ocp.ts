export interface Creator {
	id: string;
	url: string;
	description: string;
	avatar: string;
	memberPrices: number[];
	owner: string;
}

export interface Post {
	id: string;
	creatorId: string;
	url: string;
	description: string;
	accessLevel: number;
	owner: string;
}

export interface PostKey {
	id: string;
	postId: string;
	accessLevel: number;
	owner: string;
}

export interface Member {
	id: string;
	creatorId: string;
	url: string;
	description: string;
	avatar: string;
	expiry: number;
	owner: string;
}

export interface Subscriber {
	id: string;
	creatorId: string;
	url: string;
	description: string;
	avatar: string;
	owner: string;
}

export interface PaidContent {
	id: string;
	creatorId: string;
	url: string;
	description: string;
	owner: string;
}

export interface CustomRequest {
	id: string;
	creator: string;
	description: string;
	payment: number;
	requester: string;
	fulfilled: boolean;
}

export enum AccessLevel {
	PUBLIC = 0,
	SUBSCRIBER = 1,
	MEMBER = 2
}
