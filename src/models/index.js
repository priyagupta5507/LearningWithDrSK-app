// @ts-check
import { initSchema } from '@aws-amplify/datastore';
import { schema } from './schema';



const { CourseDetail, Videos, Categories, Banner, Users } = initSchema(schema);

export {
  CourseDetail,
  Videos,
  Categories,
  Banner,
  Users
};