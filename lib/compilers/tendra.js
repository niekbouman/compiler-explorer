import { GCCCompiler } from './gcc';

export class TenDRACompiler extends GCCCompiler {
    optionsForFilter(filters, outputFilename) {
        let options = ['-o', this.filename(outputFilename)];
        if (!filters.binary) options = options.concat('-S');
        return options;
    }
}
