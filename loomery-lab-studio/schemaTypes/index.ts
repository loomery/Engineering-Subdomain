import { prototypeType } from "./types/prototypeType";
import { contributorType } from "./types/contributorType";
import { tagType } from "./types/tagType";

import { summaryObject } from "./objects/summaryObject";
import { goalsObject } from "./objects/goalsObject";
import { actionObject, actionsObject } from "./objects/actionsObject";
import { useCasesObject, useCaseObject } from "./objects/useCasesObject";
import { contributorNotesObject } from "./objects/contributorNotesObject";
import { tryItOutObject } from "./objects/tryItOutObject";
import { techStackObject } from "./objects/techStackObject";

export const schemaTypes = [
    prototypeType, contributorType, tagType, summaryObject,
    goalsObject, actionObject, actionsObject, useCasesObject, 
    useCaseObject, contributorNotesObject, tryItOutObject, techStackObject,
]
