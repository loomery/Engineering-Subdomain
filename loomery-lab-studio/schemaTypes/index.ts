import { prototypeType } from "./types/prototypeType";
import { contributorType } from "./types/contributorType";
import { tagType } from "./types/tagType";
import { summaryObject } from "./objects/summaryObject";
import { goalsObject } from "./objects/goalsObject";
import { actionObject, actionsObject } from "./objects/actionsObject";

export const schemaTypes = [
    prototypeType, contributorType, tagType, summaryObject,
    goalsObject, actionObject, actionsObject
];
