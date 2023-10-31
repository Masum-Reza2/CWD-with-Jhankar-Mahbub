/**
 *>>>>>>>> json web token
 * follow documentation<<<<<<
 * install jwt
 * import jwt
 * generate =>>>> const token = jwt.sign(payload, 'secret', { expiresIn: '1h' });
 * 
 * >>>> set cookies with http only
 * >>>> *cors kahini setup [origin, credentials]
 * >>>> setup cookie in client side while fetching {withCredentials : true}
 * >>>> {withcredentials : true} is important in client side
 * >>>> to read the cookie in the backend use cookie parser as middleware
 */

/**
 * How to store token in the client side ?
 * 1.memory (like state of react etc.)--> ok type
 * 2.localStorage --> ok type (xss)
 * 3.cookies http only
 */