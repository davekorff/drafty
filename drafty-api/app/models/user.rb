class User < ApplicationRecord
  has_many :teams
  has_many :contests, through: :teams
  has_secure_password

  validates :username, uniqueness: true

  # def balance
  #   balance = 0
  #   Contest.all.each do |contest|
  #     if contest.end_date < Date.today && contest.winning_user_ids.include?(self.id)
  #       balance += contest.prize
  #     end
  #   end
  #   balance
  # end


  # def balance
  #   balance = 0
  #   self.contests.each do |contest|
  #     if contest.end_date < Date.today && contest.winning_user_ids.include?(self.id)
  #       balance += contest.prize
  #     end
  #   end
  #   balance
  # end

end
