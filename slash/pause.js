const { SlashCommandBuilder } = require("@discordjs/builders")

module.exports = {
	data: new SlashCommandBuilder().setName("pause").setDescription("Pausa essa xibata"),
	run: async ({ client, interaction }) => {
		const queue = client.player.getQueue(interaction.guildId)

		if (!queue) return await interaction.editReply("tem musica pra pausar nao mula")

		queue.setPaused(true)
        await interaction.editReply("musica foi pausada pra continuar o carai usa /Resume")
	},
}