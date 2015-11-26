import * as cheerio from 'cheerio';
import TagSet from './lib/tag';
import walk from './lib/walk';

class Page {
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
	uid: number = 0;
	/**
	 * custom targets
	 */
	customTags: Set<string> = new Set();
	/**
	 * ui targets
	 */
	uiTags: Set<string> = new Set();
	
	private buildTag() {
		var $ = this.$,
			tags = new TagSet();
		
		walk($('body').get(), function (node) {
			tags.add(node.name);
		});
		
		tags.custom().forEach(function (customTag) {
			// TODO
		});
	}
	
	constructor(content: string, path: string) {
		let $ = this.$ = cheerio.load(content);
		this.mainScript = $('script', 'body');
		this.buildTag();
	}
}

export default Page;