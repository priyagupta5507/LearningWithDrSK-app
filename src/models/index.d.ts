import { ModelInit, MutableModel } from "@aws-amplify/datastore";

type CourseDetailMetaData = {
  readOnlyFields: 'createdAt' | 'updatedAt';
}

type VideosMetaData = {
  readOnlyFields: 'createdAt' | 'updatedAt';
}

type CategoriesMetaData = {
  readOnlyFields: 'createdAt' | 'updatedAt';
}

type BannerMetaData = {
  readOnlyFields: 'createdAt' | 'updatedAt';
}

type UsersMetaData = {
  readOnlyFields: 'createdAt' | 'updatedAt';
}

export declare class CourseDetail {
  readonly id: string;
  readonly courseName?: string | null;
  readonly description?: string | null;
  readonly rating?: number | null;
  readonly outline?: string | null;
  readonly duration?: string | null;
  readonly videoId?: string | null;
  readonly VideosCoursedetail?: (Videos | null)[] | null;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
  constructor(init: ModelInit<CourseDetail, CourseDetailMetaData>);
  static copyOf(source: CourseDetail, mutator: (draft: MutableModel<CourseDetail, CourseDetailMetaData>) => MutableModel<CourseDetail, CourseDetailMetaData> | void): CourseDetail;
}

export declare class Videos {
  readonly id: string;
  readonly courseName?: string | null;
  readonly categoryId?: string | null;
  readonly CategoriesVideo?: Categories | null;
  readonly coursedetailID: string;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
  readonly videosCategoriesVideoId?: string | null;
  constructor(init: ModelInit<Videos, VideosMetaData>);
  static copyOf(source: Videos, mutator: (draft: MutableModel<Videos, VideosMetaData>) => MutableModel<Videos, VideosMetaData> | void): Videos;
}

export declare class Categories {
  readonly id: string;
  readonly categoryName?: string | null;
  readonly description?: string | null;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
  constructor(init: ModelInit<Categories, CategoriesMetaData>);
  static copyOf(source: Categories, mutator: (draft: MutableModel<Categories, CategoriesMetaData>) => MutableModel<Categories, CategoriesMetaData> | void): Categories;
}

export declare class Banner {
  readonly id: string;
  readonly bannerName?: string | null;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
  constructor(init: ModelInit<Banner, BannerMetaData>);
  static copyOf(source: Banner, mutator: (draft: MutableModel<Banner, BannerMetaData>) => MutableModel<Banner, BannerMetaData> | void): Banner;
}

export declare class Users {
  readonly id: string;
  readonly userName?: string | null;
  readonly email?: string | null;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
  constructor(init: ModelInit<Users, UsersMetaData>);
  static copyOf(source: Users, mutator: (draft: MutableModel<Users, UsersMetaData>) => MutableModel<Users, UsersMetaData> | void): Users;
}