import { PCPUpld } from './pcpupld';

export class PCPUploadResult {
    constructor(
        public pcp:PCPUpld,
        public mfFullName:string,
        public mfShortName:string,
    ) {}
}
