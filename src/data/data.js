const games = ['carrom', 'tt', 'pool', 'chess'];

const gamesData = {
	carrom: { equipments: [], days: ['Today', 'Tomorrow'] },
	tt: { equipments: ['TT1', 'TT2'], days: ['Today', 'Tomorrow'] },
	pool: { equipments: [], days: ['Today', 'Tomorrow'] },
	chess: { equipments: [], days: ['Today', 'Tomorrow'] },
};

const URL = 'https://api.agify.io/?name=bella';
export { games, gamesData, URL };
