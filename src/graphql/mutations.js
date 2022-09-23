/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const createCourseDetail = /* GraphQL */ `
  mutation CreateCourseDetail(
    $input: CreateCourseDetailInput!
    $condition: ModelCourseDetailConditionInput
  ) {
    createCourseDetail(input: $input, condition: $condition) {
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
export const updateCourseDetail = /* GraphQL */ `
  mutation UpdateCourseDetail(
    $input: UpdateCourseDetailInput!
    $condition: ModelCourseDetailConditionInput
  ) {
    updateCourseDetail(input: $input, condition: $condition) {
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
export const deleteCourseDetail = /* GraphQL */ `
  mutation DeleteCourseDetail(
    $input: DeleteCourseDetailInput!
    $condition: ModelCourseDetailConditionInput
  ) {
    deleteCourseDetail(input: $input, condition: $condition) {
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
export const createBanner = /* GraphQL */ `
  mutation CreateBanner(
    $input: CreateBannerInput!
    $condition: ModelBannerConditionInput
  ) {
    createBanner(input: $input, condition: $condition) {
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
export const updateBanner = /* GraphQL */ `
  mutation UpdateBanner(
    $input: UpdateBannerInput!
    $condition: ModelBannerConditionInput
  ) {
    updateBanner(input: $input, condition: $condition) {
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
export const deleteBanner = /* GraphQL */ `
  mutation DeleteBanner(
    $input: DeleteBannerInput!
    $condition: ModelBannerConditionInput
  ) {
    deleteBanner(input: $input, condition: $condition) {
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
export const createVideos = /* GraphQL */ `
  mutation CreateVideos(
    $input: CreateVideosInput!
    $condition: ModelVideosConditionInput
  ) {
    createVideos(input: $input, condition: $condition) {
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
export const updateVideos = /* GraphQL */ `
  mutation UpdateVideos(
    $input: UpdateVideosInput!
    $condition: ModelVideosConditionInput
  ) {
    updateVideos(input: $input, condition: $condition) {
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
export const deleteVideos = /* GraphQL */ `
  mutation DeleteVideos(
    $input: DeleteVideosInput!
    $condition: ModelVideosConditionInput
  ) {
    deleteVideos(input: $input, condition: $condition) {
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
export const createCategories = /* GraphQL */ `
  mutation CreateCategories(
    $input: CreateCategoriesInput!
    $condition: ModelCategoriesConditionInput
  ) {
    createCategories(input: $input, condition: $condition) {
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
export const updateCategories = /* GraphQL */ `
  mutation UpdateCategories(
    $input: UpdateCategoriesInput!
    $condition: ModelCategoriesConditionInput
  ) {
    updateCategories(input: $input, condition: $condition) {
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
export const deleteCategories = /* GraphQL */ `
  mutation DeleteCategories(
    $input: DeleteCategoriesInput!
    $condition: ModelCategoriesConditionInput
  ) {
    deleteCategories(input: $input, condition: $condition) {
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
export const createUsers = /* GraphQL */ `
  mutation CreateUsers(
    $input: CreateUsersInput!
    $condition: ModelUsersConditionInput
  ) {
    createUsers(input: $input, condition: $condition) {
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
export const updateUsers = /* GraphQL */ `
  mutation UpdateUsers(
    $input: UpdateUsersInput!
    $condition: ModelUsersConditionInput
  ) {
    updateUsers(input: $input, condition: $condition) {
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
export const deleteUsers = /* GraphQL */ `
  mutation DeleteUsers(
    $input: DeleteUsersInput!
    $condition: ModelUsersConditionInput
  ) {
    deleteUsers(input: $input, condition: $condition) {
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
