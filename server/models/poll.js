var PollSchema = new mongoose.Schema({ 
  user_name: String,
  question: { type: String, required: true, min:[8, 'Question is not long enough - must be a min of 8 characters'] },
  option1: { type: String, required: true, min:[3, 'Option 1 is not long enough - must be a min of 3 characters'] },
  option2: { type: String, required: true, min:[3, 'Option 2 is not long enough - must be a min of 3 characters'] },
  option3: { type: String, required: true, min:[3, 'Option 3 is not long enough - must be a min of 3 characters'] },
  option4: { type: String, required: true, min:[3, 'Option 4 is not long enough - must be a min of 3 characters'] },
  option1_count: {type:Number, default:0},
  option2_count: {type:Number, default:0},
  option3_count: {type:Number, default:0},
  option4_count: {type:Number, default:0},
  created_at: {type: Date, default: new Date}
})

PollSchema.plugin(uniqueValidator)
mongoose.model('Poll', PollSchema)