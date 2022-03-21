import { defineStore } from 'pinia'

export const useBoardStore = defineStore('board', {
	state: () => {
		return {
            //state of each square in the board
			board: [
                ['', '', ''],
                ['', '', ''],
                ['', '', '']
            ]
		}
	},

	actions: {
		
	}
})