export interface UserSchemaDto {
  name: string;
  email: string;
  password: string;
  roles: string[];
}

export interface upadateUserDataDto {
  name: string;
  roles?: string[];
  email: string;
  image: string;
  image_ref: string;
}
