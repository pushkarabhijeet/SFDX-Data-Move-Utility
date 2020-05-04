/*
 * Copyright (c) 2020, salesforce.com, inc.
 * All rights reserved.
 * SPDX-License-Identifier: BSD-3-Clause
 * For full license text, see the LICENSE file in the repo root or https://opensource.org/licenses/BSD-3-Clause
 */


import { OPERATION } from "../../components/statics";
import { MessageUtils } from "../../components/messages";
import { IOrgConnectionData } from "..";
import { IApiJobCreateResult, IApiProcessParameters } from "./interfaces";




/**
 * Base class for all ApiProcess inherited classes
 *
 * @export
 * @class ApiProcessBase
 */
export default class ApiProcessBase {

    isSource: boolean;
    pollingIntervalMs: number
    operation: OPERATION;
    updateRecordId: boolean;
    sObjectName : string;
    logger: MessageUtils;
    connectionData : IOrgConnectionData;

    apiJobCreateResult: IApiJobCreateResult;

    numberJobRecordsSucceeded: number =  0;
    numberJobRecordsFailed: number =  0;

    get instanceUrl(){
        return this.connectionData.instanceUrl;
    }

    get accessToken(){
        return this.connectionData.accessToken;
    }

    get version(){
        return this.connectionData.apiVersion;
    }

    get strOperation(): string {
        if ((typeof this.operation != "string") == true) {
            return OPERATION[this.operation].toString();
        }
        return this.operation.toString();
    }

    constructor(params: IApiProcessParameters) {
        this.logger = params.logger;
        this.connectionData = params.connectionData;
        this.sObjectName = params.sObjectName;
        this.operation = params.operation;
        this.pollingIntervalMs = params.pollingIntervalMs;
        this.updateRecordId = params.updateRecordId;
    }

}