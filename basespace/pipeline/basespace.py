from basespace.models import Basespace

def usercreds():
    
    bs_recent_login = Basespace.objects.latest('id')
    pk_of_recent_login = bs_recent_login.id
    current_access_token = bs_recent_login.bs_access_token
    current_bs_email = bs_recent_login.bs_email
    bearer_auth = "Bearer " + str(current_access_token)
   
    request_headers = {
        "Content-Type": "application/json",
        "User-Agent": "BaseSpaceGOSDK/0.9.3 BaseSpaceCLI/1.2.1",
        "Authorization": bearer_auth
    }

    return_json = {}

    return_json['pk_recent_login'] = pk_of_recent_login
    return_json['bs_email'] = current_bs_email
    return_json['headers'] = request_headers
    return_json['bs_recent_login'] = bs_recent_login
    

    return return_json