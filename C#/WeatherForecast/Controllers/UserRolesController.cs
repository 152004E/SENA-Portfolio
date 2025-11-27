using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using WebApplicationConDB.Data;
using WebApplicationConDB.Models;

namespace WebApplicationConDB.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class UserRolesController : ControllerBase
    {
        private readonly AppDbContext _context;

        public UserRolesController(AppDbContext context)
        {
            _context = context;
        }

        // GET: api/UserRoles
        [HttpGet]
        public async Task<ActionResult<IEnumerable<UserRoles>>> GetUserRoles()
        {
            return await _context.UserRoles.ToListAsync();
        }

        // GET: api/UserRoles/5
        [HttpGet("{id}")]
        public async Task<ActionResult<UserRoles>> GetUserRoles(int id)
        {
            var userRoles = await _context.UserRoles.FindAsync(id);

            if (userRoles == null)
            {
                return NotFound();
            }

            return userRoles;
        }

        // PUT: api/UserRoles/5
        // To protect from overposting attacks, see https://go.microsoft.com/fwlink/?linkid=2123754
        [HttpPut("{id}")]
        public async Task<IActionResult> PutUserRoles(int id, UserRoles userRoles)
        {
            if (id != userRoles.IdUsers)
            {
                return BadRequest();
            }

            _context.Entry(userRoles).State = EntityState.Modified;

            try
            {
                await _context.SaveChangesAsync();
            }
            catch (DbUpdateConcurrencyException)
            {
                if (!UserRolesExists(id))
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

        // POST: api/UserRoles
        // To protect from overposting attacks, see https://go.microsoft.com/fwlink/?linkid=2123754
        [HttpPost]
        public async Task<ActionResult<UserRoles>> PostUserRoles(UserRoles userRoles)
        {
            _context.UserRoles.Add(userRoles);
            try
            {
                await _context.SaveChangesAsync();
            }
            catch (DbUpdateException)
            {
                if (UserRolesExists(userRoles.IdUsers))
                {
                    return Conflict();
                }
                else
                {
                    throw;
                }
            }

            return CreatedAtAction("GetUserRoles", new { id = userRoles.IdUsers }, userRoles);
        }

        // DELETE: api/UserRoles/5
        [HttpDelete("{id}")]
        public async Task<IActionResult> DeleteUserRoles(int id)
        {
            var userRoles = await _context.UserRoles.FindAsync(id);
            if (userRoles == null)
            {
                return NotFound();
            }

            _context.UserRoles.Remove(userRoles);
            await _context.SaveChangesAsync();

            return NoContent();
        }

        private bool UserRolesExists(int id)
        {
            return _context.UserRoles.Any(e => e.IdUsers == id);
        }
    }
}
