import "./types/Car"
import "./types/Attribute"

import { builder } from "./builder";

export const schema = builder.toSchema()