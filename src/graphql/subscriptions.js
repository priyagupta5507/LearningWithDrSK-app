/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const onCreateCourseDetail = /* GraphQL */ `
  subscription OnCreateCourseDetail {
    onCreateCourseDetail {
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
export const onUpdateCourseDetail = /* GraphQL */ `
  subscription OnUpdateCourseDetail {
    onUpdateCourseDetail {
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
export const onDeleteCourseDetail = /* GraphQL */ `
  subscription OnDeleteCourseDetail {
    onDeleteCourseDetail {
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
export const onCreateBanner = /* GraphQL */ `
  subscription OnCreateBanner {
    onCreateBanner {
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
export const onUpdateBanner = /* GraphQL */ `
  subscription OnUpdateBanner {
    onUpdateBanner {
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
export const onDeleteBanner = /* GraphQL */ `
  subscription OnDeleteBanner {
    onDeleteBanner {
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
export const onCreateVideos = /* GraphQL */ `
  subscription OnCreateVideos {
    onCreateVideos {
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
export const onUpdateVideos = /* GraphQL */ `
  subscription OnUpdateVideos {
    onUpdateVideos {
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
export const onDeleteVideos = /* GraphQL */ `
  subscription OnDeleteVideos {
    onDeleteVideos {
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
export const onCreateCategories = /* GraphQL */ `
  subscription OnCreateCategories {
    onCreateCategories {
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
export const onUpdateCategories = /* GraphQL */ `
  subscription OnUpdateCategories {
    onUpdateCategories {
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
export const onDeleteCategories = /* GraphQL */ `
  subscription OnDeleteCategories {
    onDeleteCategories {
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
export const onCreateUsers = /* GraphQL */ `
  subscription OnCreateUsers {
    onCreateUsers {
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
export const onUpdateUsers = /* GraphQL */ `
  subscription OnUpdateUsers {
    onUpdateUsers {
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
export const onDeleteUsers = /* GraphQL */ `
  subscription OnDeleteUsers {
    onDeleteUsers {
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
