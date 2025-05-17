export interface Level {
	label: string;
	size: number;
	duration: number;
	emojis: string[];
}

export const levels: Level[] = [
	{
		label: 'noob',
		size: 6,
		duration: 30 * 1000,
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

export function saveCustomLevel(level: Level) {
	const customLevels = listCustomLevels();
	const existingIndex = customLevels.findIndex(l => l.label === level.label);
	if (existingIndex !== -1) {
		customLevels[existingIndex] = level;
	} else {
		customLevels.push(level);
	}
	localStorage.setItem('customLevels', JSON.stringify(customLevels));
}

export function listCustomLevels(): Level[] {
	const customLevels = localStorage.getItem('customLevels');
	return customLevels ? JSON.parse(customLevels) : [];
}

export function deleteCustomLevel(label: string) {
	const customLevels = listCustomLevels();
	const updatedLevels = customLevels.filter(level => level.label !== label);
	localStorage.setItem('customLevels', JSON.stringify(updatedLevels));
}

export function getCustomLevel(label: string): Level | null {
	const customLevels = listCustomLevels();
	return customLevels.find(level => level.label === label) || null;
}
