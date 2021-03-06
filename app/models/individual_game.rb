# == Schema Information
#
# Table name: individual_games
#
#  id           :integer          not null, primary key
#  frames       :hstore
#  score        :integer
#  bowler_id    :integer
#  team_game_id :integer
#  created_at   :datetime
#  updated_at   :datetime
#

class IndividualGame < ActiveRecord::Base
	attr_accessible :frames, :score

	belongs_to :bowler
  belongs_to :team_game

	validates :score, presence: true
end
