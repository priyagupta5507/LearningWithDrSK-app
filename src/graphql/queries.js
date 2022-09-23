/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const getCourseDetail = /* GraphQL */ `
  query GetCourseDetail($id: ID!) {
    getCourseDetail(id: $id) {
      id
      courseName
      description
      rating
      outline
      duration
      videoId
      VideosCoursedetail {
        items {
          id
          courseName
          categoryId
          CategoriesVideo {
            id
            categoryName
            description
            createdAt
            updatedAt
            _version
            _deleted
            _lastChangedAt
          }
          coursedetailID
          createdAt
          updatedAt
          _version
          _deleted
          _lastChangedAt
          videosCategoriesVideoId
        }
        nextToken
        startedAt
      }
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
    }
  }
`;
export const listCourseDetails = /* GraphQL */ `
  query ListCourseDetails(
    $filter: ModelCourseDetailFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listCourseDetails(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        courseName
        description
        rating
        outline
        duration
        videoId
        VideosCoursedetail {
          items {
            id
            courseName
            categoryId
            coursedetailID
            createdAt
            updatedAt
            _version
            _deleted
            _lastChangedAt
            videosCategoriesVideoId
          }
          nextToken
          startedAt
        }
        createdAt
        updatedAt
        _version
        _deleted
        _lastChangedAt
      }
      nextToken
      startedAt
    }
  }
`;
export const syncCourseDetails = /* GraphQL */ `
  query SyncCourseDetails(
    $filter: ModelCourseDetailFilterInput
    $limit: Int
    $nextToken: String
    $lastSync: AWSTimestamp
  ) {
    syncCourseDetails(
      filter: $filter
      limit: $limit
      nextToken: $nextToken
      lastSync: $lastSync
    ) {
      items {
        id
        courseName
        description
        rating
        outline
        duration
        videoId
        VideosCoursedetail {
          items {
            id
            courseName
            categoryId
            coursedetailID
            createdAt
            updatedAt
            _version
            _deleted
            _lastChangedAt
            videosCategoriesVideoId
          }
          nextToken
          startedAt
        }
        createdAt
        updatedAt
        _version
        _deleted
        _lastChangedAt
      }
      nextToken
      startedAt
    }
  }
`;
export const getBanner = /* GraphQL */ `
  query GetBanner($id: ID!) {
    getBanner(id: $id) {
      id
      bannerName
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
    }
  }
`;
export const listBanners = /* GraphQL */ `
  query ListBanners(
    $filter: ModelBannerFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listBanners(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        bannerName
        createdAt
        updatedAt
        _version
        _deleted
        _lastChangedAt
      }
      nextToken
      startedAt
    }
  }
`;
export const syncBanners = /* GraphQL */ `
  query SyncBanners(
    $filter: ModelBannerFilterInput
    $limit: Int
    $nextToken: String
    $lastSync: AWSTimestamp
  ) {
    syncBanners(
      filter: $filter
      limit: $limit
      nextToken: $nextToken
      lastSync: $lastSync
    ) {
      items {
        id
        bannerName
        createdAt
        updatedAt
        _version
        _deleted
        _lastChangedAt
      }
      nextToken
      startedAt
    }
  }
`;
export const getVideos = /* GraphQL */ `
  query GetVideos($id: ID!) {
    getVideos(id: $id) {
      id
      courseName
      categoryId
      CategoriesVideo {
        id
        categoryName
        description
        createdAt
        updatedAt
        _version
        _deleted
        _lastChangedAt
      }
      coursedetailID
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
      videosCategoriesVideoId
    }
  }
`;
export const listVideos = /* GraphQL */ `
  query ListVideos(
    $filter: ModelVideosFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listVideos(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        courseName
        categoryId
        CategoriesVideo {
          id
          categoryName
          description
          createdAt
          updatedAt
          _version
          _deleted
          _lastChangedAt
        }
        coursedetailID
        createdAt
        updatedAt
        _version
        _deleted
        _lastChangedAt
        videosCategoriesVideoId
      }
      nextToken
      startedAt
    }
  }
`;
export const syncVideos = /* GraphQL */ `
  query SyncVideos(
    $filter: ModelVideosFilterInput
    $limit: Int
    $nextToken: String
    $lastSync: AWSTimestamp
  ) {
    syncVideos(
      filter: $filter
      limit: $limit
      nextToken: $nextToken
      lastSync: $lastSync
    ) {
      items {
        id
        courseName
        categoryId
        CategoriesVideo {
          id
          categoryName
          description
          createdAt
          updatedAt
          _version
          _deleted
          _lastChangedAt
        }
        coursedetailID
        createdAt
        updatedAt
        _version
        _deleted
        _lastChangedAt
        videosCategoriesVideoId
      }
      nextToken
      startedAt
    }
  }
`;
export const getCategories = /* GraphQL */ `
  query GetCategories($id: ID!) {
    getCategories(id: $id) {
      id
      categoryName
      description
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
    }
  }
`;
export const listCategories = /* GraphQL */ `
  query ListCategories(
    $filter: ModelCategoriesFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listCategories(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        categoryName
        description
        createdAt
        updatedAt
        _version
        _deleted
        _lastChangedAt
      }
      nextToken
      startedAt
    }
  }
`;
export const syncCategories = /* GraphQL */ `
  query SyncCategories(
    $filter: ModelCategoriesFilterInput
    $limit: Int
    $nextToken: String
    $lastSync: AWSTimestamp
  ) {
    syncCategories(
      filter: $filter
      limit: $limit
      nextToken: $nextToken
      lastSync: $lastSync
    ) {
      items {
        id
        categoryName
        description
        createdAt
        updatedAt
        _version
        _deleted
        _lastChangedAt
      }
      nextToken
      startedAt
    }
  }
`;
export const getUsers = /* GraphQL */ `
  query GetUsers($id: ID!) {
    getUsers(id: $id) {
      id
      userName
      email
      subscription_name
      likes
      expiryDate
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
    }
  }
`;
export const listUsers = /* GraphQL */ `
  query ListUsers(
    $filter: ModelUsersFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listUsers(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        userName
        email
        subscription_name
        likes
        expiryDate
        createdAt
        updatedAt
        _version
        _deleted
        _lastChangedAt
      }
      nextToken
      startedAt
    }
  }
`;
export const syncUsers = /* GraphQL */ `
  query SyncUsers(
    $filter: ModelUsersFilterInput
    $limit: Int
    $nextToken: String
    $lastSync: AWSTimestamp
  ) {
    syncUsers(
      filter: $filter
      limit: $limit
      nextToken: $nextToken
      lastSync: $lastSync
    ) {
      items {
        id
        userName
        email
        subscription_name
        likes
        expiryDate
        createdAt
        updatedAt
        _version
        _deleted
        _lastChangedAt
      }
      nextToken
      startedAt
    }
  }
`;
