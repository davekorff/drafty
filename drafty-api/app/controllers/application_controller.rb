class ApplicationController < ActionController::API

  def encode_token(user_id)
    JWT.encode({user_id: user_id}, "1234")
  end

  def get_token
    request.headers["Authorization"]
  end

  def decode_token
    begin
      JWT.decode(get_token, "1234")[0]["user_id"]
    rescue
      # Token invalid, return nil
      nil
    end
  end

  def curr_user
    User.find_by(id: decode_token)
  end

end
