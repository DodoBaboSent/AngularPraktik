﻿using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using AngularPraktik;
using AngularPraktik.Models;

namespace AngularPraktik.Controllers
{
    [Route("api/DB")]
    [ApiController]
    public class MenuCafesController : ControllerBase
    {
        private readonly MenuCafeDBContext _context;

        public MenuCafesController(MenuCafeDBContext context)
        {
            _context = context;
        }

        // GET: api/MenuCafes
        [HttpGet]
        [Route("GetAllDB")]
        public async Task<ActionResult<IEnumerable<MenuCafe>>> GetMenuCafeSet()
        {
          if (_context.MenuCafeSet == null)
          {
              return NotFound();
          }
            return await _context.MenuCafeSet.ToListAsync();
        }

        // GET: api/MenuCafes/5
        [HttpGet("{id}")]
        public async Task<ActionResult<MenuCafe>> GetMenuCafe(int id)
        {
          if (_context.MenuCafeSet == null)
          {
              return NotFound();
          }
            var menuCafe = await _context.MenuCafeSet.FindAsync(id);

            if (menuCafe == null)
            {
                return NotFound();
            }

            return menuCafe;
        }

        // PUT: api/MenuCafes/5
        // To protect from overposting attacks, see https://go.microsoft.com/fwlink/?linkid=2123754
        [HttpPut("{id}")]
        public async Task<IActionResult> PutMenuCafe(int id, MenuCafe menuCafe)
        {
            if (id != menuCafe.id)
            {
                return BadRequest();
            }

            _context.Entry(menuCafe).State = EntityState.Modified;

            try
            {
                await _context.SaveChangesAsync();
            }
            catch (DbUpdateConcurrencyException)
            {
                if (!MenuCafeExists(id))
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

        // POST: api/MenuCafes
        // To protect from overposting attacks, see https://go.microsoft.com/fwlink/?linkid=2123754
        [HttpPost]
        public async Task<ActionResult<MenuCafe>> PostMenuCafe(MenuCafe menuCafe)
        {
          if (_context.MenuCafeSet == null)
          {
              return Problem("Entity set 'MenuCafeDBContext.MenuCafeSet'  is null.");
          }
            _context.MenuCafeSet.Add(menuCafe);
            await _context.SaveChangesAsync();

            return CreatedAtAction("GetMenuCafe", new { id = menuCafe.id }, menuCafe);
        }

        // DELETE: api/MenuCafes/5
        [HttpDelete("{id}")]
        public async Task<IActionResult> DeleteMenuCafe(int id)
        {
            if (_context.MenuCafeSet == null)
            {
                return NotFound();
            }
            var menuCafe = await _context.MenuCafeSet.FindAsync(id);
            if (menuCafe == null)
            {
                return NotFound();
            }

            _context.MenuCafeSet.Remove(menuCafe);
            await _context.SaveChangesAsync();

            return NoContent();
        }

        private bool MenuCafeExists(int id)
        {
            return (_context.MenuCafeSet?.Any(e => e.id == id)).GetValueOrDefault();
        }
    }
}
