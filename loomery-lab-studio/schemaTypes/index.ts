import { prototypeType } from "./types/prototypeType";
import { contributorType } from "./types/contributorType";
import { tagType } from "./types/tagType";

import { summaryObject } from "./objects/summaryObject";
import { goalsObject } from "./objects/goalsObject";
import { actionObject, actionsObject } from "./objects/actionsObject";
import { useCasesObject, useCaseObject } from "./objects/UseCasesObject";
import { testimonyObject } from "./objects/TestimonyObject";

export const schemaTypes = [
    prototypeType, contributorType, tagType, summaryObject,
    goalsObject, actionObject, actionsObject, useCasesObject, 
    useCaseObject, testimonyObject
];
