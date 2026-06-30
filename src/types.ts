export interface Comment {
  id: string;
  authorName: string;
  authorAvatar?: string;
  content: string;
  likes: number;
  hasLiked?: boolean;
  timestamp: string;
}

export interface Pin {
  id: string;
  title: string;
  description: string;
  imageUrl: string;
  authorName: string;
  authorAvatar: string;
  authorFollowers: string;
  category: string;
  comments: Comment[];
  likes: number;
  likedByUser?: boolean;
  isFollowingAuthor?: boolean;
}

export interface ExploreCategory {
  id: string;
  name: string;
  imageUrl: string;
}

export interface ExploreIdea {
  id: string;
  name: string;
  imageUrl: string;
}
