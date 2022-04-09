import { combineEpics, ofType } from "redux-observable";

import { of } from "rxjs";
import { catchError, map, mergeMap, takeUntil } from "rxjs/operators";

import * as backend from "@/apis/index";
import {
  fetchProfile,
  fetchProfileCancelled,
  fetchProfileRejected,
  fetchProfileSuccess,
} from "./slice";

const fetchAnchorTagEpic = (action$) =>
  action$.pipe(
    ofType(fetchProfile.type),
    mergeMap((action) =>
      backend.getProfile({ userName: action?.payload?.userName }).pipe(
        map((response) =>
          fetchProfileSuccess({ name: response?.name, email: response?.email })
        ),
        takeUntil(action$.pipe(ofType(fetchProfileCancelled.type))),
        catchError((error) => of(fetchProfileRejected(error)))
      )
    )
  );

const epics = combineEpics(fetchAnchorTagEpic);

export default epics;
