declare class Page {
    $: CheerioStatic;
    /**
     * main script of the page
     */
    mainScript: Cheerio;
    /**
     * main script source
     */
    mainSrc: string;
    /**
     * unique id
     */
    uid: number;
    /**
     * custom targets
     */
    customTags: Set<string>;
    /**
     * ui targets
     */
    uiTags: Set<string>;
    private buildTag();
    constructor(content: string, path: string);
}
export default Page;
