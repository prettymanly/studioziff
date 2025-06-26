# ZiffBook Portfolio - Security Rules & Development Standards

## 🚨 CRITICAL RULES - NON-NEGOTIABLE

### 1. TURBOPACK PROHIBITION
**NEVER install, enable, or use Turbopack under ANY circumstances.**

- ❌ **Forbidden**: `next dev --turbopack`
- ❌ **Forbidden**: Any Turbopack flags in package.json scripts
- ❌ **Forbidden**: Turbopack configuration files

**Why**: Turbopack causes severe caching issues where file changes are completely ignored by the development server, leading to hours of debugging frustration.

**Always Use**: Standard Next.js dev server (`next dev`)

### 2. PACKAGE.JSON VERIFICATION
Before starting development, ALWAYS verify package.json scripts:

```json
{
  "scripts": {
    "dev": "next dev",           // ✅ CORRECT
    "build": "next build",       // ✅ CORRECT
    "start": "next start"        // ✅ CORRECT
  }
}
```

**Never Allow**:
```json
{
  "scripts": {
    "dev": "next dev --turbopack"  // ❌ FORBIDDEN
  }
}
```

## 🛡️ DEVELOPMENT SECURITY

### 3. ENVIRONMENT VARIABLES
- Store sensitive data in `.env.local` (never commit)
- Use `NEXT_PUBLIC_` prefix only for client-side variables
- Validate all environment variables at startup

### 4. TYPE SAFETY
- Enable strict TypeScript mode
- Define interfaces for all data structures
- No `any` types in production code
- Use proper typing for all component props

### 5. DEPENDENCY MANAGEMENT
- Pin major versions to prevent breaking changes
- Regular security audits with `npm audit`
- Remove unused dependencies
- Use exact versions for critical packages

## 🔒 CODE QUALITY STANDARDS

### 6. LINTING & FORMATTING
- ESLint configuration must be enforced
- Prettier for consistent code formatting
- Pre-commit hooks to prevent bad code
- No console.log statements in production

### 7. COMPONENT SECURITY
- Sanitize all user inputs
- Use Next.js Image component for images
- Implement proper error boundaries
- Validate all props with TypeScript

### 8. BUILD & DEPLOYMENT
- Never commit build artifacts
- Use environment-specific configurations
- Implement proper error pages
- Enable security headers

## 🚀 PERFORMANCE SECURITY

### 9. BUNDLE ANALYSIS
- Regular bundle size monitoring
- Tree-shaking verification
- Lazy loading for large components
- Optimize images and assets

### 10. CACHING STRATEGY
- Proper cache headers
- Static asset optimization
- CDN configuration
- Cache invalidation strategy

## 📋 DEVELOPMENT CHECKLIST

Before starting any development session:

- [ ] Verify no Turbopack in package.json
- [ ] Confirm Next.js dev server starts without flags
- [ ] Test file change detection works
- [ ] Environment variables properly configured
- [ ] TypeScript strict mode enabled
- [ ] Linting rules active

## 🆘 EMERGENCY PROCEDURES

### If Turbopack is Detected:
1. **IMMEDIATELY** stop all development servers
2. Remove `--turbopack` from all scripts
3. Delete `.next` directory
4. Clear all caches: `rm -rf .next node_modules/.cache`
5. Restart development server
6. Verify file changes are detected

### If File Changes Not Detected:
1. Kill all Next.js processes: `pkill -f "next dev"`
2. Clear caches: `rm -rf .next`
3. Restart server: `npm run dev`
4. Test with simple file change
5. If still failing, restart in new directory

## 🔍 MONITORING

### Daily Checks:
- Verify localhost updates on file save
- Check for any Turbopack references
- Monitor bundle size
- Review TypeScript errors

### Weekly Reviews:
- Security audit dependencies
- Review performance metrics
- Update documentation
- Test build process

## 📞 ESCALATION

If any security rule is violated or development issues persist:
1. Document the exact issue
2. Note all attempted solutions
3. Create fresh project in new directory
4. Report to development team

---

**Remember**: These rules exist to prevent hours of debugging and ensure smooth development. Following them strictly saves time and frustration. 