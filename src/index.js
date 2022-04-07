import conf from "../package.json";
import { ParseText } from "./ParseText";
export default {
  npm_name: conf.name,
  version: conf.version,
  incidents: [
    {
      exportable: ParseText,
      name: "ParseText",
      attributesValidationRules: {
        fontSize: { type: "number", optional: true },
        textColor: { type: "color", optional: true },
        fontFamily: { type: "string", optional: true },
        position: {
          type: "enum",
          optional: true,
          values: ["top", "center", "bottom"],
        },
        maxWidth: { type: "number", optional: true },
        paddingTop: { type: "number", optional: true },
        paddingBottom: { type: "number", optional: true },
        subtitles: "string",
      },
    },
  ],
};
