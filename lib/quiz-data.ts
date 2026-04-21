export type MBTIDimension = "E" | "I" | "S" | "N" | "T" | "F" | "J" | "P";

export interface Answer {
  text: string;
  scores: Partial<Record<MBTIDimension, number>>;
}

export interface Question {
  id: number;
  category: string;
  question: string;
  answers: Answer[];
}

export interface CatType {
  mbti: string;
  name: string;
  subtitle: string;
  quote: string;
  tags: string[];
  description: string;
  image: string;
}

export const questions: Question[] = [
  {
    id: 1,
    category: "社交还是独处，这是个问题",
    question: "你在家里最喜欢做什么？",
    answers: [
      { text: "找人撒娇蹭腿，总想待在人群旁边", scores: { E: 2 } },
      { text: "自己找个角落窝着，偶尔出来转一圈", scores: { I: 2 } },
      { text: "看情绪，想社交就社交，不想就消失", scores: { I: 1, E: 1 } },
    ],
  },
  {
    id: 2,
    category: "直觉还是现实",
    question: "窗外有只鸟落在枝头，你会？",
    answers: [
      { text: "盯着看，脑子里已经在模拟扑过去的路线", scores: { N: 2 } },
      { text: "观察它的动作、颜色和大小", scores: { S: 2 } },
      { text: "看两眼就失去兴趣，继续做自己的事", scores: { I: 1, S: 1 } },
    ],
  },
  {
    id: 3,
    category: "理性还是感性",
    question: "主人今天情绪明显不好，你会怎么做？",
    answers: [
      { text: "马上跑过去蹭脸，陪在旁边", scores: { F: 2 } },
      { text: "远远观察，确认没危险就不管了", scores: { T: 2 } },
      { text: "偶尔过去看看，但不会一直黏着", scores: { T: 1, F: 1 } },
    ],
  },
  {
    id: 4,
    category: "计划还是随性",
    question: "吃饭时间到了，你会？",
    answers: [
      { text: "提前守在饭碗旁边等着", scores: { J: 2 } },
      { text: "饿了才想起来，随时去吃", scores: { P: 2 } },
      { text: "在附近转悠，等主人主动来喂", scores: { P: 1, F: 1 } },
    ],
  },
  {
    id: 5,
    category: "社交还是独处",
    question: "来了一位陌生访客，你会怎么反应？",
    answers: [
      { text: "立刻跑过去打招呼，闻来闻去", scores: { E: 2 } },
      { text: "躲起来观察，确认没威胁再慢慢露面", scores: { I: 2 } },
      { text: "假装没看见，等对方主动来找我", scores: { I: 1, T: 1 } },
    ],
  },
  {
    id: 6,
    category: "直觉还是现实",
    question: "玩具被藏起来了，你怎么找？",
    answers: [
      { text: "凭直觉到处翻，相信自己能找到", scores: { N: 2 } },
      { text: "系统地从上次看到它的地方开始找", scores: { S: 2, J: 1 } },
      { text: "找一下找不到就放弃，等它自己出现", scores: { P: 2 } },
    ],
  },
  {
    id: 7,
    category: "理性还是感性",
    question: "主人训斥了你一顿，你会？",
    answers: [
      { text: "生气，扭头走开，暂时不理他", scores: { F: 2 } },
      { text: "分析一下是不是自己做错了什么，然后继续", scores: { T: 2 } },
      { text: "当场委屈，但五分钟后就忘了", scores: { F: 1, P: 1 } },
    ],
  },
  {
    id: 8,
    category: "计划还是随性",
    question: "下雨天，户外行程取消了，你会？",
    answers: [
      { text: "烦躁，一直在门口转，计划被打乱了", scores: { J: 2 } },
      { text: "完全无所谓，窝起来睡觉更好", scores: { P: 2 } },
      { text: "有点遗憾，但很快找到其他事情玩", scores: { P: 1, N: 1 } },
    ],
  },
  {
    id: 9,
    category: "社交还是独处",
    question: "你最理想的独处状态是？",
    answers: [
      { text: "完全不被打扰，在高处俯视一切", scores: { I: 2 } },
      { text: "虽然独处但主人在视线范围内就好", scores: { E: 1, F: 1 } },
      { text: "独处？我不懂，我喜欢待在人堆里", scores: { E: 2 } },
    ],
  },
  {
    id: 10,
    category: "直觉还是现实",
    question: "你对新环境的第一反应是？",
    answers: [
      { text: "立刻开始探索每个角落，充满好奇", scores: { N: 2, E: 1 } },
      { text: "先站在原地观察，确认安全再行动", scores: { S: 2, I: 1 } },
      { text: "找个角落躲起来，等熟悉了再说", scores: { I: 2 } },
    ],
  },
  {
    id: 11,
    category: "理性还是感性",
    question: "你更在意什么？",
    answers: [
      { text: "自己的感受和情绪，开心最重要", scores: { F: 2 } },
      { text: "事情的逻辑和效率，结果最重要", scores: { T: 2 } },
      { text: "两者都在意，但很难兼顾", scores: { T: 1, F: 1 } },
    ],
  },
  {
    id: 12,
    category: "计划还是随性",
    question: "对于未来，你怎么看？",
    answers: [
      { text: "有计划才有安全感，凡事想好再行动", scores: { J: 2 } },
      { text: "活在当下，明天的事明天再说", scores: { P: 2 } },
      { text: "大方向有，细节顺其自然", scores: { P: 1, N: 1 } },
    ],
  },
];

export const catTypes: Record<string, CatType> = {
  INTJ: {
    mbti: "INTJ",
    name: "冷静旁观的布偶猫",
    subtitle: "神秘系独立贵族",
    quote: "我不是不在乎，我只是不表现出来。",
    tags: ["高冷但有原则", "独立不依赖", "看透一切不说破", "认准的人才靠近"],
    description:
      "布偶猫安静、优雅，对世界有自己的判断。它不会随便讨好任何人，但认定的主人它会用整个宇宙守护。你也是这样——看起来疏离，其实内心有一套完整的逻辑和情感。你的沉默不是冷漠，是深思。",
    image: "/cats/ragdoll.png",
  },
  INTP: {
    mbti: "INTP",
    name: "思考过度的阿比西尼亚猫",
    subtitle: "哲学系好奇宝宝",
    quote: "为什么？但是为什么呢？不对，再想想。",
    tags: ["越想越复杂", "对一切都好奇", "行动力偶尔掉线", "独处充电达人"],
    description:
      "阿比西尼亚猫聪明、好动、永远对世界充满疑问。它会花三小时研究一个纸团怎么动。你也是这样——脑子里住着十万个为什么，享受思考本身胜过答案，偶尔会想太多忘了行动。",
    image: "/cats/abyssinian.png",
  },
  ENTJ: {
    mbti: "ENTJ",
    name: "天生领袖的挪威森林猫",
    subtitle: "统治系全场掌控者",
    quote: "这件事我来，你们按我说的做。",
    tags: ["说话算数", "目标感强", "效率优先", "天然指挥官"],
    description:
      "挪威森林猫体型大、气场强，生来就知道自己是谁。它不需要争，地盘自然是它的。你也是这样——有清晰的目标，强大的执行力，走进一个地方自然就成为核心。",
    image: "/cats/norwegian.png",
  },
  ENTP: {
    mbti: "ENTP",
    name: "鬼点子最多的孟加拉猫",
    subtitle: "搅局系创意机器",
    quote: "无聊是我最大的敌人。",
    tags: ["点子永远有", "喜欢辩论", "不按套路出牌", "拒绝一成不变"],
    description:
      "孟加拉猫精力旺盛，永远在找新鲜刺激。它会想出各种方式开门、打翻东西只是为了看看会发生什么。你也是这样——创意无限，思维跳脱，最怕无聊，最爱挑战所有人认为理所当然的事。",
    image: "/cats/bengal.png",
  },
  INFJ: {
    mbti: "INFJ",
    name: "洞察人心的暹罗猫",
    subtitle: "共情系神秘预言家",
    quote: "我知道你今天心情不好，你不用说。",
    tags: ["感知力超强", "话不多但准", "理想主义者", "深度共情体"],
    description:
      "暹罗猫安静却敏锐，总能感知到主人的情绪变化。它不多话，但每次开口都切中要害。你也是这样——不需要对方开口就知道他们需要什么，用深度陪伴代替千言万语。",
    image: "/cats/siamese.png",
  },
  INFP: {
    mbti: "INFP",
    name: "活在梦里的苏格兰折耳猫",
    subtitle: "文艺系浪漫理想主义",
    quote: "这个世界如果更温柔一点就好了。",
    tags: ["感情细腻", "创意丰富", "容易共情", "内心世界超大"],
    description:
      "折耳猫温柔、安静，总是以自己的方式感受这个世界。它坐在窗边发呆不是在浪费时间，是在感受光的温度。你也是这样——内心住着一个完整的宇宙，对美和情感有超出常人的感知力。",
    image: "/cats/scottish.png",
  },
  ENFJ: {
    mbti: "ENFJ",
    name: "带动全场的缅因库恩猫",
    subtitle: "暖场系天生社交达人",
    quote: "你开心，我就开心。",
    tags: ["感染力强", "天然暖男/女", "在乎每个人感受", "团队粘合剂"],
    description:
      "缅因库恩猫体型大、性格温和，走到哪里都是焦点，但它不争，只是自然而然地让所有人感到舒适。你也是这样——有一种让周围人都感到被关注和温暖的能力，是任何群体里的情感支柱。",
    image: "/cats/maine-coon.png",
  },
  ENFP: {
    mbti: "ENFP",
    name: "永远充满热情的橘猫",
    subtitle: "活力系快乐传播机",
    quote: "今天吃什么！！！好耶！！！",
    tags: ["热情感染全场", "好奇心旺盛", "情绪表达直接", "人生就是要快乐"],
    description:
      "橘猫永远充满热情，对什么都感兴趣，食物、玩具、你的腿……它用全力活着每一刻。你也是这样——情绪丰富，对生活保持热情，总能找到值得高兴的事，是人群里天然的开心果。",
    image: "/cats/orange.png",
  },
  ISTJ: {
    mbti: "ISTJ",
    name: "规律至上的英国短毛猫",
    subtitle: "稳定系可靠老实人",
    quote: "按时吃饭，按时睡觉，人生就该这样。",
    tags: ["作息极度规律", "承诺必须兑现", "不爱意外", "沉默的守护者"],
    description:
      "英国短毛猫安静、稳重，对生活有一套固定的节奏。它不需要刺激，只需要秩序。你也是这样——可靠、踏实，是那种别人说'有你在就放心了'的人。不擅长表达，但行动早已说明一切。",
    image: "/cats/british.png",
  },
  ISFJ: {
    mbti: "ISFJ",
    name: "默默守护的波斯猫",
    subtitle: "照顾系贴心小棉袄",
    quote: "你饿了吗？你冷了吗？你还好吗？",
    tags: ["细心观察每个人", "默默付出不求回报", "记住所有细节", "温柔但有底线"],
    description:
      "波斯猫温柔、安静，总是在你身边但不打扰你。它记得你喜欢什么时候被摸头，什么时候需要安静。你也是这样——用细心和耐心照顾身边的人，不需要被感谢，只要大家都好。",
    image: "/cats/persian.png",
  },
  ESTJ: {
    mbti: "ESTJ",
    name: "管理欲爆棚的美国短毛猫",
    subtitle: "执行系天生管理者",
    quote: "规则就是规则，没什么好商量的。",
    tags: ["说到做到", "效率至上", "不喜欢模糊地带", "执行力MAX"],
    description:
      "美国短毛猫自信、直接，对事情有清晰的判断和处理方式。它不拖泥带水，想清楚就行动。你也是这样——务实、高效，是那种把混乱变成秩序的人，别人依赖你是因为你真的靠谱。",
    image: "/cats/american.png",
  },
  ESFJ: {
    mbti: "ESFJ",
    name: "人缘最好的土耳其安哥拉猫",
    subtitle: "社交系万人迷",
    quote: "大家都开心才是真的开心！",
    tags: ["关心每个人", "社交能量充沛", "和谐氛围守护者", "朋友圈最活跃那个"],
    description:
      "土耳其安哥拉猫活泼、热情，走进一个地方自然就成为焦点，但它真正在意的是所有人的感受。你也是这样——有天然的社交能力，关心周围每个人，是朋友圈里永远记得大家生日的那个人。",
    image: "/cats/angora.png",
  },
  ISTP: {
    mbti: "ISTP",
    name: "动手能力强的俄罗斯蓝猫",
    subtitle: "技术系沉默解决者",
    quote: "没什么好说的，我已经搞定了。",
    tags: ["话少但每句都有用", "动手能力强到离谱", "不解释但结果在那里", "被需要但不爱被打扰"],
    description:
      "俄罗斯蓝猫独立、冷静，对外人保持距离，但它认定的人它会一直默默守着。它不会说'我来帮你'，但出了事第一个冷静处理的就是它。你也是这样——存在本身就是安全感，不需要解释，结果在那里就够了。",
    image: "/cats/russian-blue.png",
  },
  ISFP: {
    mbti: "ISFP",
    name: "活在当下的土耳其梵猫",
    subtitle: "感官系自由艺术家",
    quote: "现在这一刻，很美。",
    tags: ["感受力超强", "活在当下", "不爱被规划", "美学天赋惊人"],
    description:
      "土耳其梵猫自由、优雅，对美有天生的感知力，不喜欢被约束。它不需要规划，只需要这一刻是好的。你也是这样——用感官感受世界，对生活中的细节之美有超出常人的捕捉力，是那种让普通瞬间变得珍贵的人。",
    image: "/cats/turkish-van.png",
  },
  ESTP: {
    mbti: "ESTP",
    name: "永不停歇的阿比猫",
    subtitle: "行动系当下冒险家",
    quote: "想太多干嘛，先冲再说！",
    tags: ["行动力爆表", "现实主义者", "解决问题飞速", "享受每个当下"],
    description:
      "阿比猫精力充沛，永远在行动，对眼前的机会反应极快。它不会花时间担心，只会立刻去做。你也是这样——是那种别人还在犹豫你已经解决了的人，活在当下，用结果说话。",
    image: "/cats/abyssinian2.png",
  },
  ESFP: {
    mbti: "ESFP",
    name: "全场最亮的金渐层猫",
    subtitle: "表演系天生主角光环",
    quote: "所有人都在看我吗？很好，继续。",
    tags: ["天生会带动气氛", "享受被关注", "情感表达直接", "生活就是舞台"],
    description:
      "金渐层猫漂亮、自信，走进任何地方都能成为焦点，而且它知道这一点。它不是在炫耀，只是自然而然地发光。你也是这样——有一种天然的感染力和表现欲，让任何场合都更有活力，是人群里的太阳。",
    image: "/cats/golden.png",
  },
};

export function calculateMBTI(answers: Record<number, number>): string {
  const scores: Record<MBTIDimension, number> = {
    E: 0, I: 0, S: 0, N: 0, T: 0, F: 0, J: 0, P: 0,
  };

  questions.forEach((q) => {
    const answerIndex = answers[q.id];
    if (answerIndex !== undefined && q.answers[answerIndex]) {
      const answerScores = q.answers[answerIndex].scores;
      Object.entries(answerScores).forEach(([dim, score]) => {
        scores[dim as MBTIDimension] += score;
      });
    }
  });

  const ei = scores.E >= scores.I ? "E" : "I";
  const sn = scores.S >= scores.N ? "S" : "N";
  const tf = scores.T >= scores.F ? "T" : "F";
  const jp = scores.J >= scores.P ? "J" : "P";

  return `${ei}${sn}${tf}${jp}`;
}
