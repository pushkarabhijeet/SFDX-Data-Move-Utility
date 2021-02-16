/**
 * This module executed AFTER all objects are executed  
 */
import { IAddonModuleBase, IPluginExecutionContext } from "../../../../components/shared_packages/commonComponents";
import { ISfdmuRunPluginRuntime } from "../../../../components/shared_packages/sfdmuRunAddonComponents";


export default class CoreOnAfter implements IAddonModuleBase {

    runtime: ISfdmuRunPluginRuntime;

    constructor(runtime: ISfdmuRunPluginRuntime) {
        this.runtime = runtime;
    }
    
    async onExecute(context: IPluginExecutionContext, args : any) : Promise<void>  {
       // TODO: Implement the core OnAfter functionality here
    }

}