export const doctorAction = async (ctx) => {
  try {
    await ctx.answerCbQuery();
    await ctx.scene.enter('questionnaire');
  } catch (error) {
    console.error('Doctor action error:', error);
  }
};
