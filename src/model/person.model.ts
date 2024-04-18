import { Model } from "objection";

export class Person extends Model {
  static get tableName() {
    return "persons";
  }

  firstName?: string;
  lastName?: string;
  children?: Person[]

  static get jsonSchema() {
    return {
      type: "object",
      required: ["firstName", "lastName"],

      properties: {
        id: { type: "integer" },
        parentId: { type: ["integer", "null"] },
        firstName: { type: "string", minLength: 1, maxLength: 255 },
        lastName: { type: "string", minLength: 1, maxLength: 255 },
        age: { type: "number" },

        // Properties defined as objects or arrays are
        // automatically converted to JSON strings when
        // writing to database and back to objects and arrays
        // when reading from database. To override this
        // behaviour, you can override the
        // Model.jsonAttributes property.
        address: {
          type: "object",
          properties: {
            street: { type: "string" },
            city: { type: "string" },
            zipCode: { type: "string" },
          },
        },
      },
    };
  }

  static get relationMappings() {
    return {
      children: {
        relation: Model.HasManyRelation,
        modelClass: Person,
        join: {
          from: "persons.id",
          to: "persons.parentId",
        },
      },
    };
  }
}
