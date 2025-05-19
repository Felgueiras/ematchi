export interface Level {
	label: string;
	size: number;
	duration: number;
	emojis: string[];
}

export const predefinedLevels: Level[] = [
	{
		label: 'noob',
		size: 3,
		duration: 45 * 1000,
		emojis: '🍏 🍎 🍐 🍊 🍋 🍌 🍉 🍇 🍓 🫐 🍈 🍒 🍑 🥭 🍍 🥥 🥝 🍅'.split(' ')
	},
	{
		label: 'easy',
		size: 4,
		duration: 60 * 1000,
		emojis:
			'🦧 🦣 🦛 🦏 🦒 🦘 🦬 🦥 🦦 🦨 🦫 🦭 🦮 🦯 🦰 🦱 🦲 🦳 🦴 🦵 🦶 🦷 🦸 🦹 🦺 🦻 🦼 🦽 🦾 🦿 🧀 🧁 🧃 🧄 🧅 🧆 🧇 🧈 🧉 🧊 🧋 🧌 🧍 🧎 🧏 🧐 🧑 🧒 🧓 🧔 🧕 🧖 🧗 🧘 🧙 🧚 🧛 🧜 🧝 🧞 🧟 🧠 🧡 🧢 🧣 🧤 🧥 🧦 🧧 🧨 🧩 🧪 🧫 🧬 🧭 🧮 🧯 🧰 🧱 🧲 🧳 🧴 🧵 🧶 🧷 🧸 🧹 🧺 🧻 🧼 🧽 🧾 🧿 🨀 🨁 🨂 🨃 🨄 🨅 🨆 🨇 🨈 🨉 🨊 🨋 🨌 🨍 🨎 🨏 🨐 🨑 🨒 🨓 🨔 🨕 🨖 🨗 🨘 🨙 🨚 🨛 🨜 🨝 🨞 🨟 🨠 🨡 🨢 🨣 🨤 🨥 🨦 🨧 🨨 🨩 🨪 🨫 🨬 🨭 🨮 🨯 🨰 🨱 🨲 🨳 🨴 🨵 🨶 🨷 🨸 🨹 🨺 🨻 🨼 🨽 🨾 🨿 🩰 🩱 🩲 🩳 🩴 🩵 🩶 🩷 🩸 🩹 🩺 🩻 🩼 🩽 🩾 🩿 🪀 🪁 🪂 🪃 🪄 🪅 🪆 🪇 🪈 🪉 🪊 � 🪌 🪍 🪎 🪏 🪐 � 🪒 🪓 🪔 🪕 🪖 🪗 🪘 🪙 🪚 🪛 🪜 🪝 🪞 🪟 🪠 � � � � 🪥 🪦 🪧 � 🪩 � 🪫 � 🪭 🪮 🪯 🪰 🪱 🪲 🪳 🪴 🪵 🪶 🪷 🪸 🪹 🪺 🪻 🪼 🪽 🪾 🫀 🫁 🫂 🫃 🫄 🫅 🫆 🫇 🫈 🫉 🫎 🫏 🫐 🫑 🫒 🫓 🫔 🫕 🫖 🫗 🫘 🫙 🫚 🫛 🫠 🫡 🫢 🫣 🫤 🫥 🫦 🫧 🫨 🫩 🫪 � 🫬 🫭 🫮 🫯 🫰 🫱 🫲 🫳 🫴 🫵 🫶 🫷 🫸 🫹 🫺 🫻 🫼 🫽 🫾 🫿 🬀 🬁 🬂 🬃 🬄 🬅 🬆 🬇 🬈 🬉 🬊 🬋 🬌 🬍 🬎 🬏 🬐 🬑 🬒 🬓 🬔 🬕 🬖 🬗 🬘 🬙 🬚 🬛 🬜 🬝 🬞 🬟 🬠 🬡 🬢 🬣 🬤 🬥 🬦 🬧 🬨 🬩 🬪 🬫 🬬 🬭 🬮 🬯 🬰 🬱 🬲 🬳 🬴 🬵 🬶 🬷 🬸 🬹 🬺 🬻 🬼 🬽 🬾 🬿 🭀 🭁 🭂 🭃 🭄 🭅 🭆 🭇 🭈 🭉 🭊 🭋 🭌 🭍 🭎 🭏 🭐 🭑 🭒 🭓 🭔 🭕 🭖 🭗 🭘 🭙 🭚 🭛 🭜 🭝 🭞 🭟 🭠 🭡 🭢 🭣 🭤 🭥 🭦 🭧 🭨 🭩 🭪 🭫 🭬 🭭 🭮 🭯 🭰 🭱 🭲 🭳 🭴 🭵 🭶 🭷 🭸 🭹 🭺 🭻 🭼 🭽 🭾 🭿 🮀 🮁 🮂 🮃 🮄 🮅 🮆 🮇 🮈 🮉 🮊 🮋 🮌 🮍 🮎 🮏 🮐 🮑 🮒 🮓 🮔 🮕 🮖 🮗 🮘 🮙 🮚 🮛 🮜 🮝 🮞 🮟 🮠 🮡 🮢 🮣 🮤 🮥 🮦 🮧 🮨 🮩 🮪 🮫 🮬 🮭 🮮 🮯 🮰 🮱 🮲 🮳 🮴 🮵 🮶 � 🮸 🮹 � 🮻 🮼 � � � 🯀 � � � � � 🯆 🯇 🯈 🯉 🯊 🯋 � 🯍 🯎 🯏 � � � � 🯔 � � 🯗 🯘 � � � 🯜 🯝 🯞 🯟 🯠 🯡 🯢 � 🯤 � 🯦 🯧 � � 🯪 🯫 � 🯭 � � � � � � 🯴 🯵 � � � � � � 🯼 🯽 🯾 �'.split(
				' '
			)
	},
	{
		label: 'medium',
		size: 6,
		duration: 150 * 1000,
		emojis:
			'🍏 🍎 🍐 🍊 🍋 🍌 🍉 🍇 🍓 🫐 🍈 🍒 🍑 🥭 🍍 🥥 🥝 🍅 🍆 🥑 🥦 🥬 🥒 🌶 🫑 🌽 🥕 🫒 🧄 🧅 🥔 🍠 🫘 🥐 🥯 🍞 🥖 🥨 🧀 🥚 🍳 🧈 🥞 🧇 🥓 🥩 🍗 🍖 🦴 🌭 🍔 🍟 🍕 🫓 🥪 🥙 🧆 🌮 🌯 🫔 🥗 🥘 🫕 🥫 🍝 🍜 🍲 🍛 🍣 🍱 🥟 🦪 🍤 🍙 🍚 🍘 🍥 🥠 🥮 🍢 🍡 🍧 🍨 🍦 🥧 🧁 🍰 🎂 🍮 🍭 🍬 🍫 🍿 🍩 🍪 🌰 🥜 🍯 🥛 🍼 🫖 🍵 🧃 🥤 🧋 🫙 🍶 🍺 🍻 🥂 🍷 🫗 🥃 🍸 🍹 🧉 🍾 🧊 🥄 🍴 🍽 🥣 🥡 🥢 🧂'.split(
				' '
			)
	},
	{
		label: 'hard',
		size: 8,
		duration: 300 * 1000,
		emojis:
			'😀 😃 😄 😁 😆 😅 😂 🤣 🥲 🥹 😊 😇 🙂 🙃 😉 😌 😍 🥰 😘 😗 😙 😚 😋 😛 😝 😜 🤪 🤨 🧐 🤓 😎 🥸 🤩 🥳 😏 😒 😞 😔 😟 😕 🙁 😣 😖 😫 😩 🥺 😢 😭 😮‍💨 😤 😠 😡 🤬 🤯 😳 🥵 🥶 😱 😨 😰 😥 😓 🫣 🤗 🫡 🤔 🫢 🤭 🤫 🤥 😶 😶‍🌫️ 😐 😑 😬 🫠 🙄 😯 😦 😧 😮 😲 🥱 😴 🤤 😪 😵 😵‍💫 🫥 🤐 🥴 🤢 🤮 🤧 😷 🤒 🤕 🤑 🤠 😈 👿 👹 👺 🤡 💩 👻 💀 👽 👾 🤖 🎃 😺 😸 😹 😻 😼 😽 🙀 😿 😾'.split(
				' '
			)
	},
	{
		label: 'super hard',
		size: 10,
		duration: 240 * 1000, // 4 minutes
		emojis:
			'🐶 🐱 🐭 🐹 🐰 🦊 🐻 🐼 🐻‍❄️ 🐨 🐯 🦁 🐮 🐷 🐽 🐸 🐵 🙈 🙉 🙊 🐒 🐔 🐧 🐦 🐤 🐣 🐥 🦆 🦅 🦉 🦇 🐺 🐗 🐴 🦄 🐝 🪱 🐛 🦋 🐌 🐞 🐜 🪰 🪲 🪳 🦟 🦗 🕷 🕸 🦂 🐢 🐍 🦎 🦖 🦕 🐙 🦑 🦐 🦞 🦀 🪸 🐡 🐠 🐟 🐬 🐳 🐋 🦈 🐊 🐅 🐆 🦓 🦍 🦧 🦣 🐘 🦛 🦏 🐪 🐫 🦒 🦘 🦬 🐃 🐂 🐄 🐎 🐖 🐏 🐑 🦙 🐐 🦌 🐕 🐩 🦮 🐕‍🦺 🐈 🐈‍⬛ 🪶 🐓 🦃 🦤 🦚 🦜 🦢 🦩 🕊 🐇 🦝 🦨 🦡 🦫 🦦 🦥 🐁 🐀 🐿 🦔'.split(
				' '
			)
	}
];

// Function to load custom levels from localStorage
function loadCustomLevels(): Level[] {
	if (typeof localStorage !== 'undefined') {
		try {
			const customLevelsJson = localStorage.getItem('customLevels');
			if (customLevelsJson) {
				return JSON.parse(customLevelsJson);
			}
		} catch (e) {
			console.error('Error loading custom levels', e);
		}
	}
	return [];
}

// Function to get all levels (predefined + custom)
export function getAllLevels(): Level[] {
	return [...predefinedLevels, ...loadCustomLevels()];
}

// Export levels for backward compatibility
export const levels = predefinedLevels;
