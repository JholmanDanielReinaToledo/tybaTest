import Joi from "joi";

export const locationGeoSchema = Joi.object({
  location: Joi.string().required(),
});

export const coordinatesGeoSchema = Joi.object({
  lat: Joi.number().required(),
  lon: Joi.number().required(),
});
