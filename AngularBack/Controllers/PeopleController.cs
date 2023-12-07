using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using AngularBack;
using AngularBack.Models;
using System.IdentityModel.Tokens.Jwt;
using System.Security.Claims;
using Microsoft.IdentityModel.Tokens;
using Newtonsoft.Json;
using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Identity;

namespace AngularBack.Controllers
{
    [Route("api/account")]
    [ApiController]
    public class PeopleController : ControllerBase
    {
        private readonly PersonDBContext _context;

        public PeopleController(PersonDBContext context)
        {
            _context = context;
        }
        [HttpGet("token/{username}/{password}")]
        public IActionResult Token(string username, string password)
        {
            var Persons = GetPersonSet();
            Person Person = new Person();
            foreach (Person persona in Persons.Result.Value)
            {
                Console.WriteLine(persona.Login + " " + persona.Password);
                Console.WriteLine(Persons.Result.Value);
                if (persona.Login == username && persona.Password == password)
                {
                    Console.WriteLine(persona);
                    Console.WriteLine(persona.Login);
                    Console.WriteLine(persona.Password);
                    Console.WriteLine(username);
                    Console.WriteLine(password);
                    Person = persona;
                    Console.WriteLine(Person);
                    Console.WriteLine(Person != null);
                    break;
                } else
                {
                    Person = null;
                }
            }
            if (Person == null)
            {
                return BadRequest(new { errorText = "Invalid username or password" });
            };
            var Claims = new List<Claim> {
                new Claim(ClaimsIdentity.DefaultNameClaimType, Person.Login),
                new Claim(ClaimsIdentity.DefaultRoleClaimType, Person.Role),
            };
            ClaimsIdentity claimsIdentity = new ClaimsIdentity(Claims, "Token", ClaimsIdentity.DefaultNameClaimType, ClaimsIdentity.DefaultRoleClaimType);
            var now = DateTime.UtcNow;
            var JWT = new JwtSecurityToken(
                issuer: AuthOptions.ISSUER,
                audience: AuthOptions.AUDIENCE,
                notBefore: now,
                claims: claimsIdentity.Claims,
                expires: now.Add(TimeSpan.FromMinutes(AuthOptions.LIFETIME)),
                signingCredentials: new SigningCredentials(AuthOptions.GetSymmetricSecurityKey(), SecurityAlgorithms.HmacSha256)
                );
            var EncodedJWT = new JwtSecurityTokenHandler().WriteToken(JWT);
            var response = new
            {
                access_token = EncodedJWT,
                username = claimsIdentity.Name
            };
            return Ok(response);
        }

        [Authorize(Roles = "admin")]
        [Route("resolveToken")]
        [HttpGet]
        public ActionResult getDataFromTokenAdmin()
        {
            var identity = HttpContext.User.Identity as ClaimsIdentity;
            if ( identity != null )
            {
                var userClaims = identity.Claims;
                Person loggedPerson = new Person
                {
                    Login = userClaims.FirstOrDefault(x => x.Type == ClaimTypes.Name)?.Value,
                    Role = userClaims.FirstOrDefault(x => x.Type == ClaimTypes.Role)?.Value,
                };
                var responseLogged = new
                {
                    login = loggedPerson.Login,
                    role = loggedPerson.Role
                };
                return Ok(responseLogged);
            }
            var response = new
            {
                role = "user"
            };
            return Ok(response);
        }

        // GET: api/People
        [HttpGet]
        public async Task<ActionResult<IEnumerable<Person>>> GetPersonSet()
        {
          if (_context.PersonSet == null)
          {
              return NotFound();
          }
            return await _context.PersonSet.ToListAsync();
        }

        // GET: api/People/5
        [HttpGet("{id}")]
        public async Task<ActionResult<Person>> GetPerson(int? id)
        {
          if (_context.PersonSet == null)
          {
              return NotFound();
          }
            var person = await _context.PersonSet.FindAsync(id);

            if (person == null)
            {
                return NotFound();
            }

            return person;
        }

        // PUT: api/People/5
        // To protect from overposting attacks, see https://go.microsoft.com/fwlink/?linkid=2123754
        [HttpPut("{id}")]
        public async Task<IActionResult> PutPerson(int? id, Person person)
        {
            if (id != person.Id)
            {
                return BadRequest();
            }

            _context.Entry(person).State = EntityState.Modified;

            try
            {
                await _context.SaveChangesAsync();
            }
            catch (DbUpdateConcurrencyException)
            {
                if (!PersonExists(id))
                {
                    return NotFound();
                }
                else
                {
                    throw;
                }
            }

            return NoContent();
        }

        // POST: api/People
        // To protect from overposting attacks, see https://go.microsoft.com/fwlink/?linkid=2123754
        [HttpPost]
        [Route("reg")]
        public async Task<ActionResult<Person>> PostPerson(Person person)
        {
          var Persons = GetPersonSet();
            foreach (Person persona in Persons.Result.Value)
            {
                Console.WriteLine(Persons.Result.Value);
                if (persona.Login == person.Login && persona.Password == person.Password)
                {
                    Console.WriteLine(persona);
                    Console.WriteLine(persona.Login);
                    Console.WriteLine(persona.Password);
                    Console.WriteLine(person.Login);
                    Console.WriteLine(person.Password);
                    return BadRequest("This username is already in use");
                }
            }
                if (_context.PersonSet == null)
          {
              return Problem("Entity set 'PersonDBContext.PersonSet'  is null.");
          }
            _context.PersonSet.Add(person);
            await _context.SaveChangesAsync();

            return CreatedAtAction("GetPerson", new { id = person.Id }, person);
        }

        // DELETE: api/People/5
        [HttpDelete("{id}")]
        public async Task<IActionResult> DeletePerson(int? id)
        {
            if (_context.PersonSet == null)
            {
                return NotFound();
            }
            var person = await _context.PersonSet.FindAsync(id);
            if (person == null)
            {
                return NotFound();
            }

            _context.PersonSet.Remove(person);
            await _context.SaveChangesAsync();

            return NoContent();
        }

        private bool PersonExists(int? id)
        {
            return (_context.PersonSet?.Any(e => e.Id == id)).GetValueOrDefault();
        }
    }
}
